app.value('url', 'https://remax14.firebaseio.com/');
app.value('inputTypes',
  [
    {
      "value": "txt",
      "label": "<i class=\"fa fa-square-o\"></i> Text Field"
    },
    {
      "value": "area",
      "label": "<i class=\"fa fa-tablet\"></i> Text Area"
    },
    {
      "value": "chbx",
      "label": "<i class=\"fa fa-toggle-on\"></i> Checkbox"
    }
  ]);

/*=Sercices*/
app.value('url', 'https://remax14.firebaseio.com/');
app.factory('urlResidential', function (url) {
  return url + 'listings/residential/'
});
app.factory('urlResidentialTemp', function (url) {
  return url + 'templates/residential/0'
});

app.factory('urlBrokers', function (url) {
  return url + 'brokers/'
});

app.value('izya', 'oberman');
app.value('izya', 'oberman');
app.value('izya', 'oberman');
app.value('izya', 'oberman');
app.value('izya', 'oberman');
app.value('izya', 'oberman');
app.value('izya2', 'oberman');
