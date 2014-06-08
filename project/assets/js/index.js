$(function() {
  console.log( "ready!" );
  
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', '/audio/mom_voicemail.mp3');
  // audioElement.setAttribute('autoplay', 'autoplay');
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

  $('.play-icon').click(function() {
    audioElement.play();
  });

});