(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if(!selector){
      throw new Error('No selector provided');
    }

    //this is a jquery object.. with pointers to the elements
    this.$formElement = $(selector);

    //check for length of elements in form
    if(this.$formElement.length === 0)
    {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit',function(event) {

      //keeps user on the page
      event.preventDefault();
      var data = {};

      $(this).serializeArray().forEach(function(item){
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });

      //'fn' is a pointer to a function passed as a parameter
      //the two functions actually declared in the main.
      fn(data)
      .then(function() {
        //remember 'this' is the form
        this.reset();
        this.elements[0].focus();
      }.bind(this));

    });
  };

  FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function(event) {
      var emailAddress = event.target.value;

      var message = '';
      if(fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!'
        event.target.setCustomValidity(message);
      }

    });
  };


  App.FormHandler = FormHandler;
  window.App = App;

})(window);
