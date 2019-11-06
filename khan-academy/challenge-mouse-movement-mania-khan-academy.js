//paint colorful shapes on the screen wherever the user's mouse moves (use mouseX and mouseY as parameters to create a variety of colors)



draw = function() {
    stroke(30, 50, 40);
    fill(mouseX, 222, 20);
    ellipse(mouseX, mouseY, mouseX+1, mouseY);
    
};
