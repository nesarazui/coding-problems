background(219, 255, 255);

//2 rows of grass
for (var grass = 0; grass <33; grass++) {
    for (var layer = 0; layer < 2; layer++) {
    fill(68, 245, 10);
    rect(grass * 12, 360 - (layer * 20), 10, 35);
    }
}

fill(245, 39, 67);
triangle(200, 28, 350, 150, 50, 150); //roof

fill(252, 250, 244);
rect(60, 150, 280, 207); //main house


//bricks for the house
for (var bRow = 0; bRow <11; bRow++) {
    for (var bCol = 0; bCol < 9; bCol++) {
        image(getImage("cute/StoneBlock"), 60 + (bRow * 25), 150 + (bCol * 25), 30, 25); 
    }
}

fill(120, 80, 19);
rect(180, 280, 40, 77); //door

//2 rows of windows
for (var r = 0; r < 9; r=r+1) {
    for (var col = 0; col < 2; col++) {
        fill(255, 242, 0);
        rect(65 + (r * 30), 155 + (col * 30), 25, 25);
    }
}
