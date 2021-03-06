"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Interaction
var left_arrow_key = 37;
var up_arrow_key = 38;
var right_arrow_key = 39;
var down_arrow_key = 40;
var max = 3;
var i = 0;
function score(x,y) {
if ((y === gem.y&&x===gem.x)||(y===gem1.y&&x===gem1.x)||(y===gem2.y&&x===gem2.x)){
i += 1;
if (y === gem.y&&x===gem.x){
  gem.y=20;
  gem.x=20
}
if(y === gem1.y&&x===gem1.x){
  gem1.y=20;
  gem1.x=20;
}
if(y === gem2.y&&x===gem2.x){
  gem2.y=20;
  gem2.x=20;
}
document.getElementById("Bell").play();
}
document.getElementById("score").innerHTML= 'Score: '+i;
if (i === max){
alert("Winner, Winner, Chicken Dinner ")
}
if (i === max){
alert("Refresh to Play Again")
}
}
function key_pressed_down(event) {
occupants[protagonist.y][protagonist.x] = undefined;
if (event.keyCode === left_arrow_key) {
if (is_in_bounds(protagonist.x - 1, protagonist.y)&&((get_terrain_height(protagonist.x - 1, protagonist.y)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x - 1, protagonist.y, 1)) ) {
score(protagonist.x-1,protagonist.y);
protagonist.x = protagonist.x - 1;
}
}
if (event.keyCode === right_arrow_key) {
if (is_in_bounds(protagonist.x + 1, protagonist.y)&&((get_terrain_height(protagonist.x + 1, protagonist.y)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x + 1, protagonist.y, 1) )) {
score(protagonist.x+1,protagonist.y);
protagonist.x = protagonist.x + 1;
}
}
if (event.keyCode === up_arrow_key) {
if (is_in_bounds(protagonist.x, protagonist.y - 1)&&((get_terrain_height(protagonist.x, protagonist.y - 1)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x, protagonist.y - 1, 1)) ) {
score(protagonist.x,protagonist.y-1);
protagonist.y = protagonist.y - 1;
}
}
if (event.keyCode === down_arrow_key) {
if (is_in_bounds(protagonist.x, protagonist.y + 1)&&((get_terrain_height(protagonist.x, protagonist.y + 1)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x, protagonist.y + 1, 1) ) ) {
score(protagonist.x,protagonist.y+1);
protagonist.y = protagonist.y + 1;
}
}
occupants[protagonist.y][protagonist.x] = protagonist.element;
render()
}
document.addEventListener('keydown', key_pressed_down);
