define(['jquery', 'bluebird'], function($, bluebird) {
  var ajaxLoader = {
    teste: function() {
      console.log("testing");
      console.log($);
      console.log(bluebird);
    }
  }

  return ajaxLoader;
});
