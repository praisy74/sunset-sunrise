const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ="sunrise1.png";

function preload() {
  //  getBackgroundImg()

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add
    getBackgroundImg()


    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API
var responce=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var resJSON=await responce.json()
var datetime=resJSON.datetime
    //change the data in JSON format
var hr=datetime.slice(11,13)
var sec=datetime.slice(17,19)
var time=datetime.slice(11,19)
textSize(20)
    text("time:"+time,50,650)

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
if(sec>=00&&sec<=02){
    bg="sunrise1.png"
}else if(sec>=03&&sec<=05){
    bg="sunrise2.png"
}else if(sec>=06&&sec<=07){
    bg="sunrise3.png"
}else if(sec>=08&&sec<=10){
    bg="sunrise4.png"
}else if(sec>=11&&sec<=13){
    bg="sunrise5.png"
}else if(sec>=14&&sec<=16) {
    bg="sunrise6.png"
}else if(sec>=17&&sec<=19){
    bg="sunset7.png"
}else if(sec>=20&&sec<=22){
    bg="sunset8.png"
}else if(sec>=23&&sec<=25){
    bg="sunset9.png"
}else if(sec>=26&&sec<=28){
    bg="sunset10.png"
}else if(sec>=29&&sec<=31){
    bg="sunset11.png"
}else if(sec>=32&&sec<=35){
    bg="sunset12.png"
}else{
    bg="PRAISYWHITE.png"
    var timeline = 60-sec
    textSize(50)
    strokeWeight(10)
    stroke("yellow")
    fill("blue")
    text(`'PLEASE WAIT FOR
            '`+timeline,380,330)
}
backgroundImg=loadImage(bg)
    //load the image in backgroundImg variable here
console.log(sec)
}
