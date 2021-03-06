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
  audioElement.setAttribute('src', '/audio/CatStevensMorningHasBroken.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()
  $.get();
  audioElement.addEventListener("load", function() {
    audioElement.play();
    audioElement.loop=true;
  }, true);
  audioElement.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);


  $('#play').click(function() {
    audioElement.play();
    audioElement.loop=true;
    $('#pause').show()
    $('#play').hide()
  });


  $('#pause').click(function() {
    audioElement.pause();
    $('#pause').hide()
    $('#play').show()
  });

});
