//creates the shape of a sun against a background and animates it using a draw() function and includes all the shape drawing commands inside it

// the starting size for the sun
    var sunSize = 30; 
    
//position of the sun
    var posX = 200;
    var posY = 298;
    
draw = function() {
    noStroke();
    // the beautiful blue sky
    background(82, 222, 240);
    
     // The sun, a little circle on the horizon
    fill(255, 204, 0);
    ellipse(posX, posY, sunSize, sunSize);
    
    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    
    sunSize = sunSize + 1;
    posX = posX + 1;
    posY = posY - 1;
 
};
