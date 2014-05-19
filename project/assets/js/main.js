$(function() {
  console.log( "ready!" );
  
  Galleria.ready(function() {
    var gallery = this;
    console.log(gallery)
    $('#fullscreen').click(function() {
      gallery.toggleFullscreen(); // toggles the fullscreen
    });
  });

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()
  $.get();
  audioElement.addEventListener("load", function() {
  audioElement.play();
  }, true);


  $('.play').click(function() {
    audioElement.play();
  });


  $('.pause').click(function() {
    audioElement.pause();
  });

});
