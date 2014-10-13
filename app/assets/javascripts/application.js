require.config({
  paths: {
    "bluebird": "http://cdnjs.cloudflare.com/ajax/libs/bluebird/1.2.2/bluebird.min",
    //"raphael":"../../../vendor/assets/javascripts/raphael"
    "raphael":"raphael"
  }
});
require(['ajaxloader'], function(ajaxloader) {
  console.log(ajaxloader.teste());
 // console.log(bluebird);
});
