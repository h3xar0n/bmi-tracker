//BMI Calculator

//Universal Weight and Height

var weightG = 51;
var heightG = 151;

//Colors

  //Copy when needed
  //front color: (frontR, frontG, frontB)
  //alter color: (alterR, alterB, alterG)

var back = (166, 358, 47);
var frontR = 320;
var frontG = 69;
var frontB = 425;
var alterR = 250;
var alterB = 217;
var alterG = 0;


//Initial Display
/** This is the initial display with two scales for weight and height, a BMI output, and a basic humanoid figure**/
  
  background(back);
  textSize(10);
  
  image(getImage("creatures/Hopper-Happy"), 10, 214, 72, -152/2);
  
  //Initial Weight Display
  fill(frontR, frontG, frontB);
  rect(50, 250, 250, 5);
  text("Weight", 6, 249, 100, 100);
      
  //Initial Height Display
  fill(frontR, frontG, frontB);
  rect(350, 250, 5, -250);
  text("Height", 332, 255, 100, 100);
   
  //BMI
  fill(frontR, frontG, frontB);
  textSize(40);
  text("BMI:", 209, 285,200, 200);
  
  //Bottom Scale
  fill(255, 0, 0);
  rect(0, 380, 400, 20);
  fill(alterR, alterB, alterG);
  rect(100, 380, 175, 20);
  fill(frontR, frontG, frontB);
  rect(0, 380, 400, 20);
  

//Weight
/** Create an adjustable scale with a value output **/

  var mouseDragged = function() {
  if (mouseX > 50 && mouseX < 300 && mouseY > 240 && mouseY < 260) {
    noStroke();
    fill(back);
    rect(45, 240, 260, 20); 
    fill(255, 0, 0);
    rect(50, 250, 250, 5);
    ellipse(mouseX, 252, 10, 15);
    weightG = mouseX;
  }

//Height
/** Create an adjustable scale with a value output   
  **/

  if (mouseX > 340 && mouseX < 370 && mouseY > 0 && mouseY < 250) {
    noStroke();
    fill(back);
    rect(340, 255, 20, -255); 
    fill(255, 0, 0);
    rect(350, 250, 5, -250);
    ellipse(352, mouseY, 15, 10);
    heightG = 400-mouseY;
  }

//Model
/** Create an adjustable model **/

  fill(back);
  rect(0, 240, 330, -300);
  image(getImage("creatures/Hopper-Happy"), 10, 214, weightG+(72-50), -(heightG)/2);

  };




//BMI Output
/** Create the BMI Output based on Weight and Height **/

draw = function() {

//Weight in Pounds
  var wYpos = 305;
  var wXpos = 8;
  textSize(15);
  noStroke();
  fill(back);
  rect(wXpos, wYpos, 80, -30); 
  fill(frontR, frontG, frontB);
  text(weightG + " pounds", wXpos, wYpos-10);
//Weight in Kilograms
  var wKYpos = 305;
  var wKXpos = 96;
  textSize(15);
  noStroke();
  fill(back);
  rect(wKXpos-4, wKYpos, 107, -30); 
  fill(alterR, alterB, alterG);
  text(round(weightG/2.2046) + " kilograms", wKXpos, wKYpos-10);
//Height in Centimeters
  var hYpos = 337;
  var hXpos = 96;
  textSize(15);
  fill(back);
  rect(hXpos, hYpos, 115, -30); 
  fill(alterR, alterB, alterG);
  text(round(heightG/1.5) + " centimeters", hXpos, hYpos-10);
//Height in Inches
  textSize(15);
  noStroke();
  fill(back);
  rect(wXpos, hYpos, 80, -30); 
  fill(frontR, frontG, frontB);
  text(round((heightG/1.5)/2.54) + " inches", wXpos, hYpos-10);
//BMI
  var heightMeters = (heightG/1.5)/100;
  var BMIden = sq(heightMeters);
  var BMI = (weightG/2.2046)/BMIden;
  fill(back);
  rect(wXpos+288, hYpos+-19, 104, -36); 
  fill(frontR, frontG, frontB);
  textSize(40);
  text( BMI , 299, 285, 58, 50);
//Judge
  var judgex = 140;
  var judgey = 365;
  if (BMI >= 30) { 
    //Judge: Obese
    fill(back);
    rect(judgex, judgey, 183, -36); 
    fill(255, 0, 0);
    textSize(20);
    text("Obese", judgex, judgey-20, 200, 200);
  } else if (BMI > 25 && BMI < 30) { 
    //Judge: Overweight
    fill(back);
    rect(judgex, judgey, 183, -36); 
    fill(255, 0, 0);
    textSize(20);
    text("Overweight", judgex, judgey-20, 200, 200);
  } else if (BMI < 18.5 && BMI > 0) {
    fill(back);
    rect(judgex, judgey, 183, -36); 
    fill(255, 0, 0);
    textSize(20);
    text("Underweight", judgex, judgey-20, 200, 200);
  } else if (BMI >= 18.5 && BMI <= 25) {
    fill(back);
    rect(judgex, judgey, 183, -36); 
    fill(alterR, alterB, alterG);
    textSize(20);
    text("Healthy Weight", judgex, judgey-20, 200, 200);
  }  else if (BMI === 0) {
    fill(frontR, frontG, frontB);
    rect(0, 380, 400, 20);
  }
};