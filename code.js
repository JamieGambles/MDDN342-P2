const frameMax = 60;
let recording = false;


function setup () {
  createCanvas(1080,1080);
  frameRate(60);
}

// function keyPressed() {
//   if (keyCode === 82) {
//     recording = true;
//     capturer.start();
//   }
// }

function draw () {
  let cur_frame = frameCount % frameMax;
  if (cur_frame >= frameMax) {
    cur_frame = 0;
  }
  let cur_frac = map(cur_frame, 0, frameMax, 0, 1);


  draw_one_frame(cur_frac);

  if (recording === true) {
    capturer.capture(canvas);
  }

}
