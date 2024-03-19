var audio = document.getElementById('myAudio');
var audioTime = document.getElementById('audioTime');
var audioLegend = document.getElementById('audioLegend');

audio.ontimeupdate = function() {
  var currentTime = formatTime(audio.currentTime);
  var duration = formatTime(audio.duration);
  audioTime.textContent = currentTime + '/' + duration;
};

audio.onloadedmetadata = function() {
  var duration = formatTime(audio.duration);
  audioTime.textContent = '0:00/' + duration;
};

audioLegend.textContent = 'legenda do audio';

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var seconds = Math.floor(seconds % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
}