nosex=0;
nosey=0;
mustachex=0;
moustachey=0;
function preload(){
    clownNose=loadImage('https://i.postimg.cc/65jKJvM0/Clown-Nose.png');
    clownMustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
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
    nosex=results[0].pose.nose.x-7;
    nosey=results[0].pose.nose.y-5;
    mustachex=nosex-15;
    mustachey=nosey+20
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save("filtering.png")
}

function draw(){
    image(video,0,0,250,250);
    image(clownNose,nosex,nosey,20,20);
    image(clownMustache,mustachex,mustachey,50,15);
}