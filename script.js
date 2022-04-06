var numInput;
var numButton;
var qInput;
var aButton;
var ansOutput;

var answers = ["Give it all you've got", "Definitely","Upgrade any way you can", "Allow yourself to rest first", "Be practical", "It is significant", "Follow the advice of experts", "You will find out everything you'll need to know", "Explore it with playful curiosity", "Be delightfully sure of it", "Get a clearer view", "Take a chance", "You'll need more information", "You'll be happy you did", "Seek out more options", "You may have to drop other things"]

document.addEventListener("DOMContentLoaded",function(){
  numInput = document.getElementById("inputNum");
  numButton = document.getElementById("buttonNum");
  qInput = document.getElementById("inputQ");
  aButton = document.getElementById("buttonQ");
  ansOutput = document.getElementById("answer");

  numButton.addEventListener("click",function(){
    var currentNumInput = numInput.value;
    halfNumber(currentNumInput);
  });

  aButton.addEventListener("click", function(){
    var currentQueInput = qInput.value;
    fortune(currentQueInput);
  });
});

function halfNumber(number){
  var pageNum = Math.floor(number/2);
  alert("The page number is "+ pageNum);
  var logPrint = "Half of " + number.toString() + " is " + pageNum.toString();
  console.log(logPrint);
}

function fortune(question){
  var result = "The answer to your question, "+question +", is:       ";
  result += answers[Math.floor(Math.random()*answers.length)];
  ansOutput.innerText= result;

  restyle();
}

function restyle(){
  var randomR = Math.random() * 255;
  var randomG = Math.random() * 255;
  var randomB = Math.random() * 255;
  var px1 = Math.random();
  var px2 = Math.random();
  var px3 = Math.random();
  var outputColorString = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
  ansOutput.style.textShadow = px1 + "px " + px2 + "px " + px3 + "px" + outputColorString;

  var diffBorder  = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden", "dotted dashed solid double"]
  ansOutput.style.borderStyle = Math.floor(diffBorder[(Math.random(diffBorder.length))]);
}
