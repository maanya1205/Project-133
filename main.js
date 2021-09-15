img= "";
status= "";
object=[];
function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
  objectDetector= ml5.objectDetector("CocoSsd",modelLoaded); 
  document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
}

function gotResult(results,error){
if(error){
    console.log(error);
}
console.log(results);
object= results;
}

function draw(){
    if(status != ""){
        r= random(255);
        g= random(255);
        b= random(255);
        objectDetector.detect(video,gotResult);  
   for(i=0;i<object.length;i++){
       document.getElementById("status").innerHTML= "Status: Object Detected!";
       document.getElementById("number_of_objects").innerHTML= "Number of objects detected are: "+object.length;
       fill(r,g,b);
       percent= floor(object[i].confidence*100);
       text(object[i].label+" "+percent+"%",object[i].x, object[i].y);
    noFill();
stroke(r,g,b);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
   }     
    }
}

