var videoElement = document.querySelector("video");
var audioCtx = new AudioContext();
var mkttalk_source = audioCtx.createMediaElementSource(videoElement);
var gainNode = audioCtx.createGain();
gainNode.gain.value = 5; // default = 1
mkttalk_source.connect(gainNode);
gainNode.connect(audioCtx.destination);