"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Interaction

var left_arrow_key = 37;
var up_arrow_key = 38;
var right_arrow_key = 39;
var down_arrow_key = 40;

var map = [0, 1, 2, 3];




 
var i = 0

function score(event) {


if (protagonist.y === blue.y){
if (protagonist.x === blue.x){
  i = i + 1;
   document.getElementById('score').innerHTML= map[i];
}
}
}


function key_pressed_down(event) {
occupants[protagonist.y][protagonist.x] = undefined;
if (event.keyCode === left_arrow_key) {
if (is_in_bounds(protagonist.x - 1, protagonist.y)&&((get_terrain_height(protagonist.x - 1, protagonist.y)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x - 1, protagonist.y, 1)) ) {
protagonist.x = protagonist.x - 1;

}
}
if (event.keyCode === right_arrow_key) {
if (is_in_bounds(protagonist.x + 1, protagonist.y)&&((get_terrain_height(protagonist.x + 1, protagonist.y)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x + 1, protagonist.y, 1) )) {
protagonist.x = protagonist.x + 1;

}
}
if (event.keyCode === up_arrow_key) {
if (is_in_bounds(protagonist.x, protagonist.y - 1)&&((get_terrain_height(protagonist.x, protagonist.y - 1)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x, protagonist.y - 1, 1)) ) {
protagonist.y = protagonist.y - 1;

}
}
if (event.keyCode === down_arrow_key) {
if (is_in_bounds(protagonist.x, protagonist.y + 1)&&((get_terrain_height(protagonist.x, protagonist.y + 1)-get_terrain_height(protagonist.x, protagonist.y)) < 2)&&(no_tree(protagonist.x, protagonist.y + 1, 1) ) ) {
protagonist.y = protagonist.y + 1;

}
}
occupants[protagonist.y][protagonist.x] = protagonist.element;
render()
}



document.addEventListener('keydown', key_pressed_down);
