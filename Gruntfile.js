var enterInside = function (target, before, insert) {
  if (target === undefined) {
    return target;
  }

  var test = target.indexOf(insert);
  if (test > 0)return target;

  var start = target.indexOf(before);

  var p1 = target.substring(0, start);
  var p2 = target.substring(start);
  return p1 + insert + p2;
}
var removeFromInside = function (target, remove) {
  if (target == undefined)
    return target;

  target = target.replace(remove, '');
  return target;
}


module.exports = function (grunt) {
  var _ = require('underscore');
  _.str = require('underscore.string');
  _.str.include('Underscore.string', 'string');


  var delFileDep = function (fileName) {
    var arrExt = ['jade', 'js', 'html'];

    var dotCoord = fileName.lastIndexOf('.');
    fileName = dotCoord > 0 ? fileName.substring(0, dotCoord) : fileName;


    arrExt.forEach(function (e) {
      var fileNameFull = fileName + '.' + e;
      if (grunt.file.exists(fileNameFull)) {
        grunt.file.delete(fileNameFull);
      }
    });

  }


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  grunt.registerTask('move-app-to-z', function () {
    if (grunt.file.exists('vs/app.js')) {
      grunt.file.copy('vs/app.js', 'vs/z/app.js');
      grunt.file.delete('vs/app.js');
    }
  });


  grunt.registerTask('copy-profile-to-root', function () {
    var address = 'app/profile.js';
    var content = grunt.file.read(address);
    content = content.replace(/http:\/\/localhost:44300/g, '');

    grunt.file.write(address, content);
    grunt.file.copy('app/profile.js', 'profile.js');
  });


  grunt.registerTask('templates', function () {
    var file = grunt.file.read('app/scripts/app.js');
    var search = "templateUrl";
    var index = 0, pos = 0;
    var fileContent = "";

    var options = {
      charset: 'utf-8',
      collapseWhitespace: true,
      removeComments: true
    }

    while (true) {
      index = file.indexOf(search, index);
      if (index == -1) {
        break;
      }

      index = file.indexOf('"', index) + 1;
      var final = file.indexOf('"', index);
      var key = file.substring(index, final);
      var startPos = key.indexOf('views');
      startPos = key.indexOf('/', startPos) + 1;
      var fileName = 'app/views/' + key.substring(startPos);
      var content = minify(grunt.file.read(fileName).trim(), options).replace('\n', '').replace('\t', '');

      var fullChunk = '<script type="text/ng-template" id="' + key + '">' + content + '</script>';
//            grunt.log.subhead(content);
      fileContent += fullChunk;
      if (final > index) {
        index = final;
      }
    }


    var dirFolder = 'app/views/directives';

    grunt.file.recurse(dirFolder, function (file) {

      var content = minify(grunt.file.read(file).trim(), options).replace('\n', '').replace('\t', '');
//            grunt.log.ok(content);

      var pos = file.indexOf('views');
      var key = file.substring(pos);
//
      var fullChunk = '<script type="text/ng-template" id="' + key + '">' + content + '</script>';
      fileContent += fullChunk;
    });

    grunt.file.write('templates.cshtml', fileContent);

  });


  grunt.registerTask('addcss', function () {

    grunt.task.run('cssmin');
    var tempFile = grunt.file.read('templates.cshtml');
    var cssFile = '<style>' + grunt.file.read('app/styles/Profile.min.css') + '</style>';

    var fileContent = tempFile + cssFile;


    fileContent = fileContent.replace(/imgdir\//g, '/Scripts/app/profile/app/imgdir/');
    fileContent = fileContent.replace(/..\/..\/img\//g, '/Scripts/app/profile/app/img/');

    grunt.file.write('templates.cshtml', fileContent);

  });

  grunt.registerTask('clean', function () {
    if (grunt.file.exists('vs')) {
      grunt.file.delete('vs');
    }

    if (grunt.file.exists('app/profile.js')) {
      grunt.file.delete('app/profile.js');
    }
  });
  grunt.registerTask('vs', function () {
//        grunt.task.run('typescript:same');
    grunt.task.run(['ngmin']);
    grunt.task.run(['move-app-to-z']);
    grunt.task.run(['uglify:minvs']);
//        grunt.task.run(['concat']);
    grunt.task.run(['copy-profile-to-root']);
    grunt.task.run(['templates']);
    grunt.task.run(['addcss']);
    grunt.task.run(['clean']);
    grunt.task.run(['ftp']);

  });


  grunt.registerTask('c', function (cname) {
//        delete option
    var rm = grunt.option('rm');

    rm = (rm === undefined) ? false : rm;


//     C        //
    var d = 'app/scripts/controllers/';
    var t = '.js';
    var ctrl = grunt.file.read('templates/ctrl.tpl');

    var lname = cname;
    var name = lname.charAt(0).toUpperCase() + lname.substring(1);


    var ctrlr = ctrl.replace(/#name#/g, name).replace(/#lname#/g, lname);

////////////////


////////////////

    // register
    var ref = '/// <reference path="controllers/' + name + '.js" />\r\n';
    var reg = 'profile.controller("' + name + 'Ctrl", ' + name + 'Ctrl);\r\n';
    var state = '\t\t\t.state("' + _.str.dasherize(lname) + '", {\r\n' +
      '\t\t\t\turl: "/' + _.str.dasherize(lname) + '", \r\n' +
      '\t\t\t\tcontroller:"' + name + 'Ctrl",\r\n' +
      '\t\t\t\ttemplateUrl: "../views/' + _.str.dasherize(lname) + '.html"\r\n' +
      '\t\t\t})\r\n';

    var apath = 'app/scripts/app.js';
    var tpath = 'app/views/' + lname + '.jade';
    var app = grunt.file.read(apath);
    if (rm) {
      //app = removeFromInside(app, ref);
      //app = removeFromInside(app, reg);
      app = removeFromInside(app, state);
    }
    else {

      //app = enterInside(app, '//#ctrl', reg);
      //app = enterInside(app, '//#ref', ref);
      app = enterInside(app, '//#state', state);
    }


    /////////////////// index
    var ipath = 'app/index.html';
    var src = '<script src="scripts/controllers/' + name + '.js"></script>\r\n';
    var indf = grunt.file.read(ipath);
    //////////////////
    if (rm) {
      indf = removeFromInside(indf, src);

    } else {

      indf = enterInside(indf, '<!-- links -->', src);
    }

    if (rm) {
      var file = d + name + t;
      console.log(file);
      console.log(tpath);
      delFileDep(file);
      delFileDep(tpath);
      //grunt.file.delete(tpath);
    } else {
      grunt.file.write(d + name + t, ctrlr);
      grunt.file.write(tpath, grunt.file.read("templates/ctrl-template.tpl"));
    }
    grunt.file.write(apath, app);
    grunt.file.write(ipath, indf);

  })


  grunt.registerTask('s', function (sname) {
//        delete option
    var rm = grunt.option('rm');

    rm = (rm === undefined) ? false : rm;


//     C        //
    var d = 'app/scripts/services/';
    var t = 'Service.js';
    var serv = grunt.file.read('templates/serv.tpl');

    var lname = sname.toLowerCase();
    var name = lname.charAt(0).toUpperCase() + lname.substring(1);


    var servr = serv.replace(/#name#/g, name).replace(/#lname#/g, lname);

////////////////


    // register
    var ref = '/// <reference path="services/' + name + 'Service.js" />\r\n';
    var reg = 'profile.service("' + name + 'Service", ' + name + 'Service);\r\n';


    var apath = 'app/scripts/app.js';
    var app = grunt.file.read(apath);
    if (rm) {
      app = removeFromInside(app, ref);
      app = removeFromInside(app, reg);
    }
    else {

      app = enterInside(app, '//#serv', reg);
      app = enterInside(app, '//#ref', ref);
    }


    /////////////////// index
    var ipath = 'app/index.html';
    var src = '<script src="scripts/services/' + name + 'Service.js"></script>\r\n';
    var indf = grunt.file.read(ipath);
    //////////////////
    if (rm) {
      indf = removeFromInside(indf, src);

    } else {

      indf = enterInside(indf, '<!-- links -->', src);
    }

    if (rm) {
      var file = d + name + t;

      delFileDep(file);

    } else {
      grunt.file.write(d + name + t, servr);
    }
    grunt.file.write(apath, app);
    grunt.file.write(ipath, indf);

  })


  grunt.registerTask('f', function (fname) {
//        delete option
    var rm = grunt.option('rm');
    rm = (rm === undefined) ? false : rm;


//     C        //
    var d = 'app/scripts/filters/';
    var t = '.js';
    var filt = grunt.file.read('templates/filt.tpl');

    var name = fname.charAt(0).toUpperCase() + fname.substring(1);
    var jname = name.charAt(0).toLowerCase() + name.substring(1);


    var filtr = filt.replace(/#name#/g, name);

////////////////


////////////////

    // register
    var ref = '/// <reference path="filters/' + name + '.js" />\r\n';
    var reg = "profile.filter('" + jname + "', () => {" +
      " return (value:boolean):string => {" +
      "return " + name + ".filter(value);     } });\r\n";


    var apath = 'app/scripts/app.js';
    var app = grunt.file.read(apath);


    /////////////////// index
    var ipath = 'app/index.html';
    var src = '<script src="scripts/filters/' + name + '.js"></script>\r\n';
    var indf = grunt.file.read(ipath);
    //////////////////
    if (rm) {
      indf = removeFromInside(indf, src);

    } else {

      indf = enterInside(indf, '<!-- links -->', src);
    }

    if (rm) {
      var file = d + name + t;

      delFileDep(file);

    } else {
      grunt.file.write(d + name + t, filtr);
    }
    grunt.file.write(apath, app);
    grunt.file.write(ipath, indf);

  })


  grunt.registerTask('d', function (dname, dtype) {
//        delete option
    var rm = grunt.option('rm');

    rm = (rm === undefined) ? false : rm;


    var d = 'app/scripts/directives/';
    var directive = grunt.file.read('templates/dir.tpl');
    dname = 'sv-' + _.str.dasherize(dname);
    var dnames = dname.toLowerCase().split('-');

    var uname = '', lname = '', jname = '';
    var counter = 1;
    dnames.forEach(function (part) {
      var Upart = part.charAt(0).toUpperCase() + part.substring(1).toLowerCase();
      uname += Upart;
      lname += part.toLowerCase();
      if (counter++ == 1) {
        jname += part.toLowerCase();
      }
      else {
        jname += Upart;
      }

    });

      jnameDashed = _.str.dasherize(jname);


    var oname = dname;
    var directivef = directive.replace(/#uname#/g, uname).replace(/#lname#/g, lname)
      .replace(/#jname#/g, jname).replace(/#dname#/g, dname);

      var dirFileName = d + jnameDashed + '.js', directivef;
    if (!rm)
      grunt.file.write(dirFileName, directivef);
    else {
      delFileDep(dirFileName);
    }


    var reg = 'profile.directive("' + jname + '", ' + jname + ');\r\n';
////////////////


    // register
    var ref = '/// <reference path="directives/' + jname + '.js" />\r\n';
//        grunt.log.ok(ref);
//        grunt.log.ok(reg);
//        grunt.fail.fatal();


    var apath = 'app/scripts/app.js';
    var tpath = 'app/views/directives/' + oname + '.jade';
    var app = grunt.file.read(apath);
    //if (rm) {
    //  app = removeFromInside(app, ref);
    //  app = removeFromInside(app, reg);
    //}
    //else {
    //
    //  app = enterInside(app, '//#dir', reg);
    //  app = enterInside(app, '//#ref', ref);
    //}


    /////////////////// index/
    var ipath = 'app/index.html';
      var src = '<script src="scripts/directives/' + jnameDashed + '.js"></script>\r\n';
    var indf = grunt.file.read(ipath);
    //////////////////
    var directiveTemplate = '.well ' + oname + ' Template';
    /////////////////
    if (dtype && dtype == 'info') {
      var directiveTemplate = grunt.file.read('templates/dir-info.tpl');
    }

    if (dtype && dtype == 'edit') {
      var directiveTemplate = grunt.file.read('templates/dir-edit.tpl');
    }


/////
    if (rm) {
      indf = removeFromInside(indf, src);

    } else {

      indf = enterInside(indf, '<!-- links -->', src);
    }

    if (rm) {
      delFileDep(tpath);
    } else {
      grunt.file.write(tpath, directiveTemplate);
    }
    grunt.file.write(apath, app);
    grunt.file.write(ipath, indf);

  })


};
