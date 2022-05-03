function preload(){

}

function setup(){
    canvas= createCanvas(250,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(250,250);
    video.hide();
    posenet= ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length>0){
    console.log(results);
    }
}

function take_snapshot(){
    save("filtering.png")
}

function draw(){
    image(video,0,0,250,250);
}