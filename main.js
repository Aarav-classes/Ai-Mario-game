function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coins = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_killing = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
  video.size(800,400);
  poseNet=ml5.poseNet(video , modelLoaded);
  poseNet.on('pose', gotPoses);
}
function gotPoses(results){
	if(results.length>0){
		console.log(results);
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	}}
	function modelLoaded(){
	  console.log("model is initialised");
	}

function draw() {
	game()
}






