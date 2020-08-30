// Add a snare drum sound
// Play a kick/snare/snare/snare pattern

// PATTERN
var totalBeats = 0;
var currentStep = 0;


var cells = [
  [0], //cells[0] holds the snare pattern
  [0],
  [0],
  [0],
  [0],
  [0],
  [0]//cells[1] holds the kick pattern
]


// SOUNDS

// Create a Players object and load the "kick.mp3" and "snare.mp3" files
var kit = new Tone.Players({
  "uno": "https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2F20_GH_Bass_Loop_110_SC_F_Min.wav?v=1598495386083",
  "dos": "https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FKING_DECO_110_vocal_ooh_ooh_woah_Fmin.wav?v=1598495418283"
  
  
  
 
});

// Connect the player output to the computer's audio output
kit.toMaster();

// Create a loop: call playBeat every half a second
// Try other durations, like "1s" and "0.25s"
Tone.Transport.scheduleRepeat(playBeat, "1s");

// Once all audio files have been loaded, start the Tone playhead
Tone.Buffer.on('load', play);

function play() {
  Tone.Transport.start();
}

// Audio playback loop
function playBeat(time) {
  // Make sure the sound files have been completely loaded
  if (kit.loaded) {
    currentStep = totalBeats % 6;
      // we have 4 steps
      if (cells[0][currentStep] == 1) {
        kit.get("uno").start(time);
      }
      if (cells[1][currentStep] == 1) {
        kit.get("dos").start(time);
      }
    if (cells[2][currentStep] == 1) {
        kit.get("tres").start(time);
      }
    if (cells[3][currentStep] == 1) {
        kit.get("cuatro").start(time);
      }
    if (cells[4][currentStep] == 1) {
        kit.get("cinco").start(time);
      }
    if (cells[5][currentStep] == 1) {
        kit.get("seis").start(time);
      }
  
    totalBeats++;
  }
}




// GRAPHICS

function setup() {
  createCanvas(600, 600); // createCanvas(windowWidth, windowHeight);
  button = createButton('Start');
  button.position(600, 550);
  button.mousePressed(control);
}

function draw() {
  
  background(255);
	let w = 100;
  Tone.Transport.bpm.value = 110; // change tempo
  fill(0, 100, 255, 250)
  
  noStroke();
  for (var step = 0; step < 6; step++) { // we have 4 steps
    for (var track = 0; track < 6; track++) { //we have 4 tracks
      if(cells[track][step] == 1){
      	rect(step * w, track*w, w, w);
      }
    }
  }
  
  // Highlight current step
  fill(100,100,300,100);
  rect(currentStep * w, 0, w, w*6);
  for (var x = 0; x < width; x += width / 6) {
		for (var y = 0; y < height; y += height / 6) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
  
}

function mousePressed(){

  for (var step = 0; step < 6; step++) { // we have 4 steps
    for (var track = 0; track < 6; track++) { //we have 4 tracks
      if(mouseX < 100*(step+1) && mouseY < 100*(track+1) && mouseX > 100*step && mouseY > 100*track){
        if(cells[track][step] == 1)
          cells[track][step] = 0;
        else
          cells[track][step] = 1;
    	}
			//cells[track][step] = !cells[track][step];
			//!0 = true; !1 = false; in JS
    }
  }
}

function control(){

  Tone.Transport.toggle();
}