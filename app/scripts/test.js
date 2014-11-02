app.factory('url', function (mainUrl) {
  return {
    residentialSettings: mainUrl + 'settings/residential/',
    brokers: mainUrl + 'brokers/',
    customers: mainUrl + 'customers/',
  }
})
