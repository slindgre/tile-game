"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Interaction

var left_arrow_key = 37;
var up_arrow_key = 38;
var right_arrow_key = 39;
var down_arrow_key = 40;
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
render();
}

function score(event) {
    var i = 0;
    if (event.keyCode === left_arrow_key) {
        if (get_occupants_cell(protagonist.x - 1, protagonist.y) !== undefined) {
            i = i + 1;
        }
    }
  if (event.keyCode === right_arrow_key) {
        if (get_occupants_cell(protagonist.x + 1, protagonist.y) !== undefined) {
            i = i + 1;
        }
    }
   if (event.keyCode === up_arrow_key) {
        if (get_occupants_cell(protagonist.x, protagonist.y - 1) !== undefined) {
             i = i + 1;
        }
    }
   if (event.keyCode === down_arrow_key) {
        if (get_occupants_cell(protagonist.x, protagonist.y + 1) !== undefined) {
             i = i + 1;
        }
    }
 return i;
}

document.addEventListener('score', score);


document.addEventListener('keydown', key_pressed_down);
