"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Initial map

var row_count = 4;
var column_count = 4;
var terrain = [
[[grass], [grass], [grass], [grass]],
[[grass], [grass], [grass, wood], [grass]],
[[grass], [grass, plain], [grass], [grass]],
[[grass], [grass], [grass], [grass]],
];
var occupants = [
[undefined, undefined, undefined, undefined],
[undefined, key, undefined, undefined],
[undefined, undefined, cat_girl, undefined],
[undefined, undefined, undefined, undefined],
];
var protagonist = {
element: cat_girl,
x: 1,
y: 1,
};
// Map utilities
function get_terrain_cell(x, y) {
var terrain_row = terrain[y];
if (terrain_row === undefined) {
return undefined;
}
return terrain_row[x];
}
function is_in_bounds(x, y) {
return get_terrain_cell(x, y) !== undefined;
}
function get_terrain_height(x, y) {
var terrain_cell = get_terrain_cell(x, y);
if (terrain_cell === undefined) {
return undefined;
}
return terrain_cell.length;
}
function is_terrain(x, y, z) {
if (z < 0) {
return true;
}
var terrain_cell = get_terrain_cell(x, y);
if (terrain_cell === undefined) {
return false;
}
return terrain_cell[z] !== undefined;
}
function no_tree(x, y, z) {
if (z < 0) {
return true;
}
var terrain_cell = get_terrain_cell(x, y);
if (terrain_cell === undefined) {
return false;
}
return terrain_cell[z] !== treeshort && terrain_cell[z] !== treetall;
}
function get_occupants_cell(x, y) {
var occupants_row = occupants[y];
if (occupants_row === undefined) {
return undefined;
}
return occupants_row[x];
}

