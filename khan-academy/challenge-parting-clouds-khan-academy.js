//designs a cloudy sky and animates it into a bright/sunny sky. As the animation begins, the clouds move away to show the sun, and the sun gradually gets larger in size.

noStroke();
var leftX = 164;
var rightX = 265;
var sunRadius = 100;

draw = function() {
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    leftX -=1;
    rightX ++;
    sunRadius += 2;
    
};
