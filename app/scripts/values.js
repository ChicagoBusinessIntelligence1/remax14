/*=Sercices*/

//root of project
app.value('mainUrl', 'https://remax14.firebaseio.com/');

app.factory('urlCommon', function (mainUrl) {
  return {
    residentialSettings: mainUrl + 'settings/residential/',
    brokers: mainUrl + 'brokers/',
    brokerApplications: mainUrl + 'admin/brokerApplications/',
    archive: mainUrl + 'archive/',
    customers: mainUrl + 'customers/',
    registeredBrokers: mainUrl + 'registeredBrokers/'
  }
})

app.factory('urlSale', function (mainUrl) {
  return {
    residentialTemplate: mainUrl + 'residential/templates/sale/0',
    residentialWishListTemplate: mainUrl + 'residential/templates/sale/1',

    residentialDrafts: '/residential/drafts/sale/',

    residentialWatchList: 'watchList/sale',

    residentialWishList: 'wishList/sale',

    residential: mainUrl + 'residential/sale/homes/'
  }
})
app.factory('urlRental', function (mainUrl) {
  return {
    residentialTemplate: mainUrl + 'residential/templates/rental/0',

    residentialDrafts: '/residential/drafts/rental/',

    residentialWatchList: 'watchList/rent',

    residentialWishList: 'wishList/rent',

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

app.value('fieldTypes', {
  text: ['Text', 'should be text'],
  email: ['Email', 'should be email'],
  url: ['Url', 'should be url'],
  number: ['Number', 'should be number']
});

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
    }
  ]);

app.value('estateTypes',
  [
    {
      "value": "sale",
      "label": "For Sale"
    },
    {
      "value": "rent",
      "label": "For Rent"
    }
  ]);

app.value('notifications', {
  homeDescription: 'Home is on sale by Remax 1st class',
  addToWatch: 'Add to Watchlist',
  removeFromWatch: 'Remove from Watchlist',
  deleteDraftTitle: 'Delete this listing',
  shareHomeTitle: 'Share this Listing in Social Media',
  sharedHomeFbTitle: 'You Listing has been successfully shared on FB',
  archiveHome: 'Move this Listing to Archive',
  draftSaved: 'Listing has been successfully saved to DB',
  draftPosted: 'Listing has been successfully posted',
  postDraftTitle: 'Make this Listing Public',
  draftDeleted: 'Listing draft has been successfully removed from DB',
  savedToWatchlist: 'Listing has been successfully saved to watchlist',
  searchSaved: 'This Search is Saved to Your Profile',
  brokerAppSubmitted: 'You Broker Application has been successfully submitted',
  brokerInfoDeleted: 'Broker account was successfully deleted',
  profileDeleted: 'You profile has been successfully deleted',
  settingsSaved: 'You settings have been successfully saved',
  profileSaved: 'You profile has been successfully saved',
  wishListUpdated: 'You wishlist has been successfully updated',
  changesSaved: 'You changes has been successfully saved',
  noPropWishList: 'You do not have any homes in the wishList yet',
  contactMessageSent: 'Your message has been successfully sent'

});
app.value('query', {});
app.value('imgSize', {w:720,h:482})
app.value('pageHomesNumber', '3');
