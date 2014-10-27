/*=Sercices*/
//root of project
app.value('mainUrl', 'https://remax14.firebaseio.com/');

app.factory('url', function (mainUrl) {
  return {
    residential: mainUrl + 'residential/home/',
    residentialTemplate: mainUrl + 'residential/templates/0',
    brokers: mainUrl + 'brokers/',
    registeredBrokers: mainUrl + 'registeredBrokers/',
    residentialDrafts:'/residential/drafts'
  }
});

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
app.value('notifications', {
  draftSaved:'Listing has been succesfully saved to DB',
  draftShared:'Listing has been succesfully shared',
  draftDeleted:'Listing has been succesfully removed from DB'

});
app.value('query', {});
app.value('value', 'value');
app.value('value', 'value');
app.value('value', 'value');
