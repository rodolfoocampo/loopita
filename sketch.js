

// PATTERN
var totalBeats = 0;
var currentStep = 0;

var loop_samples = 21;
var w = 35;
var steps = 8;

var cells = [];
for (var i = 0; i < loop_samples; i++) {
  cells.push([0]);
}

function setup() {
  
  
  createCanvas(steps*w, loop_samples*w); // createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
  stroke(51);
  
  //button.position(1000, 900);
  //button.mousePressed(control);
  
}

Tone.Transport.scheduleRepeat(playBeat, "1s");
Tone.Transport.bpm.value = 110; // change tempo
  
  var kit = new Tone.Players({
  
    0: "https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FDrumLoop_BoopBopAhh_110.wav?v=1598496088564",
    1:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FBFTF_-_110_-_Vintage_Funk_08.wav?v=1598496136454",
    2:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FLoop_Hats_delay_110_bpm.wav?v=1598495680316",
    
  
    3:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FOS_SRN_110_Fmin_Floating_Piano_3.wav?v=1598495429429",
    4:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FBRIDGET_KELLY_vocal_aaah_07_reverb_110_Fmin.wav?v=1598495432734",
    5:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2Fah2_kit4_hot_flute_loop_110_Fm.wav?v=1598495439152",
  
    6:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FOS_CD2_110_Fmin_Dusty_Keys.wav?v=1598495445121",
    7:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FLSSID_110_Synth_Loop_16_Fm.wav?v=1598495448474",
    8:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FATEC_110_pad_tube_sines_Fm.wav?v=1598495506416",
  
   9:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FAN_ICO1_5_Nylon_021-027_110_Cmin_Wet.wav?v=1598495512196",
   10:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2F110_Eb_45.wav?v=1598495514739",
   
  
   11:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FSKALP_micro_funk_bass_110_Fm.wav?v=1598495527126",
   12:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FBassLoop_AnotherLevel_110_F.wav?v=1598495528367",
   
   13:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FLoop_Hats_delay_110_bpm.wav?v=1598495680316",
   
   14:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FBFTF_-_110_-_Fm_-_Soul_Chords_01.wav?v=1598495963179",
   15:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2Ffg_kit_grooveshop_vibe_pad_110_Fmin.wav?v=1598495992397",
   
  
   16:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FDrumLoop_Tight70_s_110.wav?v=1598496089864",
   17:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2F110_-_Fm_-_Wah_Riff.wav?v=1598496090502",
   18: "https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2FWILSON_CHARLES_bass_loop_ifoundluckbass_110_Fmin.wav?v=1598495420721",
   19:"https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2F110_-_Fm_-_CZ_Patch_Bass_01.wav?v=1598496222450",
   20: "https://cdn.glitch.com/bbe9b3d3-fbb7-4abb-98b5-101aed67869b%2Fme.wav?v=1598799529142"
  
  
  
 
});

document.getElementById("myBtn").addEventListener('click', async () => {
	await Tone.Transport.toggle();
  
  
})

function playBeat(time) {
  // Make sure the sound files have been completely loaded
   kit.toMaster();
  
  if (kit.loaded) {
    currentStep = totalBeats % steps;
      
    
    for (var i = 0; i < loop_samples; i++) {
      if (cells[i][currentStep] == 1) {
        kit.get(i).start(time);
      }
    
  }
          
  
    totalBeats++;
  }
}
    
// SOUNDS
console.log("hey")


// Connect the player output to the computer's audio output


// Create a loop: call  every half a second
// Try other durations, like "1s" and "0.25s"


// Once all audio files have been loaded, start the Tone playhead




// Audio playback loop



// GRAPHICS




function draw() {
  
  background(180,204,224);
	
  
  fill(4,91,149);
  
  
  for (var step = 0; step < steps; step++) { // we have 4 steps
    for (var track = 0; track < loop_samples; track++) { //we have 4 tracks
      if(cells[track][step] == 1){
      	//rect(step * w, track*w, w, w);
        rect(step * w, track*w, w, w);
      }
      
    }
  }
  
  // Highlight current step
  fill(5,57,107);
  
  rect(currentStep * w, 0, w, w*loop_samples);
  
  for (var x = 0; x < width + 1; x += width / steps) {
		for (var y = 0; y < height + 1; y += height / loop_samples) {
			stroke(3,31,77);
			strokeWeight(3);
			line(x, 0, x, height);
			line(0, y, width, y);
      
		}
	}
  
}

function mousePressed(){

  for (var step = 0; step < steps; step++) { 
    for (var track = 0; track < loop_samples; track++) { 
      if(mouseX < w*(step+1) && mouseY < w*(track+1) && mouseX > w*step && mouseY > w*track){
        
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





