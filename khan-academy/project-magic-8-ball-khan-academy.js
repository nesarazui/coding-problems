//creates a magic 8-ball using if/else statements that displays a different message depending on the random number that's generated

ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var blessYou = floor(random(1, 5));
if (blessYou === 1) {
    text("Salud", 176, 200);

} 
else if (blessYou === 2) {
    text("Dinero", 185, 200);
}

else {
    text("Amor", 183, 200);
}

