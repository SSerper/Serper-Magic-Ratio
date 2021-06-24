// -------------------------------------------------------------------------------------------------
function validate(){
  var angle1 = document.getElementById("Ang1").value;
  var angle2 = document.getElementById("Ang2").value;
  var angle3 = document.getElementById("Ang3").value;
  var i = 0;

  if (angle1 > 0) {i++;}
  if (angle2 > 0) {i++;}
  if (angle3 > 0) {i++;}

  if ((angle1 > 0) && (angle2 > 0) && (angle3 > 0)) {reset(); angle1 = 0; angle2 = 0; angle3 = 0;}
  
  if (angle1 >= 180) {reset(); angle1 = 0; angle2 = 0; angle3 = 0;}
  if (angle2 >= 180) {reset(); angle1 = 0; angle2 = 0; angle3 = 0;}
  if (angle3 >= 180) {reset(); angle1 = 0; angle2 = 0; angle3 = 0;}

  if ((angle1 > 0) && (angle2 > 0) && (angle3 == 0)) {document.getElementById("Ang3").value = (180 - angle1 - angle2);}
  if ((angle2 > 0) && (angle3 > 0) && (angle1 == 0)) {document.getElementById("Ang1").value = (180 - angle2 - angle3);}
  if ((angle3 > 0) && (angle1 > 0) && (angle2 == 0)) {document.getElementById("Ang2").value = (180 - angle3 - angle1);}

  if (i > 3)  {reset();}
  if (i < 2)  {document.getElementById("ToolTipText").innerHTML = "Specify values for at least two angles";}

  var angle1 = document.getElementById("Ang1").value;
  var angle2 = document.getElementById("Ang2").value;
  var angle3 = document.getElementById("Ang3").value;

  if ((angle1 > 0) && (angle2 > 0) && (angle2 > 0)) {
    calc();
    document.getElementById("ToolTipText").innerHTML = "Ratio calculated.<br>Click on picture to reset.";
  }
}

// -------------------------------------------------------------------------------------------------
function reset() {
  document.getElementById("Ang1").value = "";
  document.getElementById("Ang2").value = "";
  document.getElementById("Ang3").value = "";
  document.getElementById("cratio").value = "";
  document.getElementById("ToolTipText").innerHTML = "Define the angles to calculate the area ratio of the inner and outer circles.";
}

// -------------------------------------------------------------------------------------------------
function calc() {
  var angle1 = document.getElementById("Ang1").value;
  var angle2 = document.getElementById("Ang2").value;
  var angle3 = document.getElementById("Ang3").value;

  rpi = 3.14159 / 180
  decp = 3
  rad1= angle1 * (rpi);
  tan1 = 1 / (Math.round(Math.tan(rad1 * 0.5) * Math.pow(10,decp)) / Math.pow(10,decp));
  rad2= angle2 * (rpi);
  tan2 = 1 / (Math.round(Math.tan(rad2 * 0.5) * Math.pow(10,decp)) / Math.pow(10,decp));
  rad3= angle3 * (rpi);
  tan3 = 1 / (Math.round(Math.tan(rad3 * 0.5) * Math.pow(10,decp)) / Math.pow(10,decp));
  totan = tan1 + tan2 + tan3
  
  rad1= angle1 * (rpi);
  sin1 = Math.round(Math.sin(rad1 * 2) * Math.pow(10,decp)) / Math.pow(10,decp);
  rad2= angle2 * (rpi);
  sin2 = Math.round(Math.sin(rad2 * 2) * Math.pow(10,decp)) / Math.pow(10,decp);
  rad3= angle3 * (rpi);
  sin3 = Math.round(Math.sin(rad3 * 2) * Math.pow(10,decp)) / Math.pow(10,decp);
  totsin = sin1 + sin2 + sin3
  
  decp = 2
  theRatio = Math.round(((totan/totsin) * 2) * Math.pow(10,decp)) / Math.pow(10,decp);
  document.getElementById("cratio").value = "ratio\= " + theRatio
}
