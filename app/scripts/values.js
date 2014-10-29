/*=Sercices*/
//root of project
app.value('mainUrl', 'https://remax14.firebaseio.com/');

app.factory('url', function (mainUrl) {
  return {
    settingsResidential: mainUrl + 'settings/residential/',
    residentialSale: mainUrl + 'residential/sale/homes/',
    residentialSaleTemplate: mainUrl + 'residential/sale/templates/0',
    brokers: mainUrl + 'brokers/',
    customers: mainUrl + 'customers/',
    registeredBrokers: mainUrl + 'registeredBrokers/',
    residentialSaleDrafts: '/residential/sale/drafts'
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

app.value('sortTypes',
  [
    {
      "value": "date",
      "label": "<i class=\"fa fa-clock-o\"></i> Newly Listed &nbsp"
    },
    {
      "value": "priceLow",
      "label": "<i class=\"fa fa-dollar\"></i>  Price: Lowest First"
    },
    {
      "value": "priceHigh",
      "label": "<i class=\"fa fa-dollar\"></i>  Price: Highest First"
    },
    {
      "value": "priceReduced",
      "label": "<i class=\"fa fa-arrow-down\"></i> Price Reduced"
    }
  ]);

app.value('notifications', {
  draftSaved: 'Listing has been succesfully saved to DB',
  draftShared: 'Listing has been succesfully shared',
  draftDeleted: 'Listing has been succesfully removed from DB'

});
app.value('query', {});
app.value('pageHomesNumber', '3');
