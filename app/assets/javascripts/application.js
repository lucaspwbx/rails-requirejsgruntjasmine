require.config({
  paths: {
    "bluebird": "http://cdnjs.cloudflare.com/ajax/libs/bluebird/1.2.2/bluebird.min"
  }
});
require(['ajaxloader'], function(ajaxloader) {
  console.log(ajaxloader.teste());
 // console.log(bluebird);
});
