$(function() {
  console.log( "ready!" );
  
  Galleria.ready(function() {
    var gallery = this;
    console.log(gallery)
    $('#fullscreen').click(function() {
      gallery.toggleFullscreen(); // toggles the fullscreen
    });
  });
});