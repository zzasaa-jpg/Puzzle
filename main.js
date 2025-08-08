import n_values_move_pattern from "./n_move_pattern_obj.js";
import winning_array from "./winning_array.js";
import winning_value from "./winning_value.js";
import {section_create, div_create,
	win_pattern_array_create, win_pattern_array_read,
	win_pattern_value_create, win_pattern_value_read,
	accessbility_btn_create, divs_create, index_create, obj_create
} from "./js/variables.js";
import win_or_lose from "./js/win_or_lose_function.js";
import start_ from "./js/start_function.js";
import render_the_boxes from "./js/render_the_boxes_function.js";
import push_random_value_in_win_pattern_array from "./js/push_random_value_in_win_pattern_array_function.js";
import _array_splice from "./js/_array_splice_function.js";
import accessbility_key from "./js/accessbility_key_function.js";
import accessbility_btn_toggle from "./js/accessbility_btn_toggle.js";
import accessbility_index_obj from "./accessbility_index_obj.js";

//----------------- creating the variables and arrays -------------------------------
section_create(document.getElementById("section"));
accessbility_btn_create(document.getElementById("accessbility_btn"));
divs_create(document.getElementsByClassName("div"));
div_create();
win_pattern_array_create([]);
win_pattern_value_create([]);
index_create(0);
obj_create(accessbility_index_obj());

//---------------- push random values and array convert in 2D array -----------------
push_random_value_in_win_pattern_array(win_pattern_array_read());
_array_splice(win_pattern_array_read(), win_pattern_value_read());
//-----------------------------------------------------------------------------------

start_(8);//start from 8 index to zero-----------------------------------------------
render_the_boxes();//render the boxes according the array----------------------------

//---------------- accessbility toggle and key functions ----------------------------
accessbility_key();
accessbility_btn_toggle();
//-----------------------------------------------------------------------------------

console.log(win_pattern_value_read(), winning_array());
console.log(win_or_lose(win_pattern_value_read(), winning_array()));
