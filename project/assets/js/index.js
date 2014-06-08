$(function() {
  console.log( "ready!" );
  
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', '/audio/mom_voicemail.mp3');
  // audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()


  $('.play-icon').click(function() {
    audioElement.play();
  });

});