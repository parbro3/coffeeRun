(function(window) {
  'use strict';
  var App = window.App || {};

  //this check needs to be done before submission
  var Validation = {
    isCompanyEmail: function (email) {
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
