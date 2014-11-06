/*=Sercices*/

//root of project
app.value('mainUrl', 'https://remax14.firebaseio.com/');

app.factory('urlCommon', function (mainUrl) {
  return {
    residentialSettings: mainUrl + 'settings/residential/',
    brokers: mainUrl + 'brokers/',
    customers: mainUrl + 'customers/',
    registeredBrokers: mainUrl + 'registeredBrokers/'
  }
})

app.factory('urlSale', function (mainUrl) {
  return {
    residentialTemplate: mainUrl + 'residential/templates/sale/0',

    residentialDrafts: '/residential/drafts/sale/',

    residentialWatchList: 'watchList/sale',

    residential: mainUrl + 'residential/sale/homes/'
  }
})
app.factory('urlRental', function (mainUrl) {
  return {
    residentialTemplate: mainUrl + 'residential/templates/rental/0',

    residentialDrafts: '/residential/drafts/rental/',

    residentialWatchList: 'watchList/rent',

    residential: mainUrl + 'residential/rental/homes/'
  }
})

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
  addToWatch: 'Add to Watchlist',
  removeFromWatch: 'Remove from Watchlist',
  postDraft: 'Make this Listing Public',
  deleteDraft: 'Delete this listing',
  shareHome: 'Share this Listing in Social Media',
  archiveHome: 'Move this Listing to Archive',
  draftSaved: 'Listing has been successfully saved to DB',
  draftShared: 'Listing has been successfully shared',
  draftDeleted: 'Listing has been successfully removed from DB',
  savedToWatchlist: 'Listing has been successfully saved to watchlist'

});
app.value('query', {});
app.value('pageHomesNumber', '3');
