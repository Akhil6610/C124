function setup(){
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,500);
canvas.position(800,100);
video.position(200,100);   
poseNet=ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
console.log('poseNet Is Initialized');
}
function draw(){
background('#969A97');
}
function gotposes(results){
    if(results.lenght>0){
console.log(results);
    }
}
