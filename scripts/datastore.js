(function (window) {
  'use strict';
  var App = window.App || {};
  var Promis = window.Promise;

function DataStore() {
  this.data = {};
}

function promiseResolvedWith(value) {
  var promise = new Promise(function(resolve, reject) {
    resolve(value);
  });
  return promise;
};

//so now any time a datastore is created it will have access to
//the add method call.
DataStore.prototype.add = function (key, val) {
  return promiseResolvedWith(null);
};

DataStore.prototype.get = function (key) {
  return promiseResolvedWith(this.data[key]);
}

DataStore.prototype.getAll = function () {
  return promiseResolvedWith(this.data);
}

DataStore.prototype.remove = function (key) {
    return promiseResolvedWith(this.data[key]);
}


App.DataStore = DataStore;
window.App = App;
})(window);
