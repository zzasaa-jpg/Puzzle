import winning_array from "../winning_array.js";
import { read_local_storage_values } from "../Local_Storage/Local_Storage.js";
import {
	section_create, section_read, div_create, obj_create,
	win_pattern_array_create, win_pattern_array_read,
	win_pattern_value_create, win_pattern_value_read,
	accessibility_btn_create, accessibility_btn_read,
	divs_create, index_create,
} from "../js/variables.js";
import win_or_lose from "../js/win_or_lose_function.js";
import create_the_puzzle_boxes from "../js/create_the_puzzle_boxes.js";
import render_the_boxes from "../js/render_the_boxes_function.js";
import push_random_value_in_win_pattern_array from "../js/push_random_value_in_win_pattern_array_function.js";
import _array_splice from "../js/_array_splice_function.js";
import accessibility_key from "../js/accessibility_key_function.js";
import accessibility_btn_toggle from "../js/accessibility_btn_toggle.js";
import accessibility_index_obj from "../accessibility_index_obj.js";
import accessibility_button_disable from "../responsive_layout_utilities/accessibility_button_disable.js"

export default function start_game() {
	//----------------- creating the variables and arrays -------------------------------
	section_append_to_body();
	accessibility_btn_append_to_body();
	divs_create(document.getElementsByClassName("div"));
	div_create();
	win_pattern_array_create([]);
	win_pattern_value_create([]);
	index_create(0);
	obj_create(accessibility_index_obj(read_local_storage_values("game_level")));

	//---------------- push random values and array convert in 2D array -----------------
	push_random_value_in_win_pattern_array(win_pattern_array_read());
	_array_splice(win_pattern_array_read(), win_pattern_value_read());
	//-----------------------------------------------------------------------------------

	create_the_puzzle_boxes();//start from random values---------------------------------
	render_the_boxes();//render the boxes according the array----------------------------

	//---------------- accessbility toggle and key functions ----------------------------
	accessibility_key();
	accessibility_btn_toggle();
	//-----------------------------------------------------------------------------------
}
//--------------------accessibility button append to body--------------------------------
function accessibility_btn_append_to_body() {
	accessibility_btn_create(document.createElement("button"));
	accessibility_btn_read().id = "accessibility_btn";
	accessibility_btn_read().innerText = "Accessibility";
	accessibility_button_disable(window.matchMedia("(max-width: 750px)"))
	document.body.append(accessibility_btn_read());
}
//---------------------------------------------------------------------------------------
//--------------------section append to body--------------------------------
function section_append_to_body() {
	section_create(document.createElement("section"));
	section_read().id = "section";
	document.body.append(section_read());
}
//---------------------------------------------------------------------------------------
