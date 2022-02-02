
noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(800, 100);
    video = createCapture(VIDEO);
    video.size(600,600);
    video.position(100,100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function gotPoses(results){
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;

     console.log("noseX = " + noseX + "noseY = "+noseY);

     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
     console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX+ "difference = "+ difference);


}

function draw(){
    background('gray');
    fill('darkblue');
    stroke('black');
    square(noseX , noseY , difference);
    document.getElementById("square_sides").innerHTML = "Width and height of the square will be = " + difference +"px";

}