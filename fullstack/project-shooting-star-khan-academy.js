//animate objects to move across the screen using variables

var xPos = 10;
var yPos = 390;

var starWidth = 15;
var starHeight = 15;

var triangleX1 = 26;
var triangleY1 = 6;
var triangleX2 = 91;
var triangleY2 = 15;
var triangleX3 = 27;
var triangleY3 = 93;
    
draw = function() {
  background(29, 40, 115);
    fill(255, 242, 0);
    rect(xPos, yPos, starWidth, starHeight);
    
    //cannon
    stroke(34, 204, 94);
    quad(0, 400, 24, 346, 102, 371, 31, 567);
    
    //triangle
    stroke(222, 212, 22);
    triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
    
    xPos = xPos + 6;
    yPos = yPos - 6;
    
    triangleX1 += 5;
    triangleY1 += 5;
    triangleX2 += 5;
    triangleY2 += 5;
    triangleX3 += 5;
    triangleY3 += 5;
    
};

