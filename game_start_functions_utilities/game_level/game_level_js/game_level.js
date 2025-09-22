import start_select_values from "../../select_game_values/select_game_values_js/select_game_values.js";
import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
import start_game from "../../../start_game/start_game.js";
import update_previous_local_storage_values from "../../update_previous_local_storage_values.js";
import add_timer from "../../../timer/timer_js/timer.js";
import { live_update, index_read, divs_read } from "../../../../js/variables.js";
import { get_accessibility_value } from "../../../accessibility_state.js";
import { total_moves_helper_function } from "../../../game_helper_functions/total_moves/total_moves_js/total_moves.js";
import restart_btn_helper_function from "../../../game_helper_functions/restart_btn/restart_btn_js/restart_btn.js";
import new_game_btn_helper_function from "../../../game_helper_functions/new_game_btn/new_game_btn_js/new_game_btn.js";
import question_btn from "../../../question_btn/question_btn_js/question_btn.js";
import setting_button_function from "../../../settings/settings_js/settings.js";

//----------------------variables creating-------------------------------------
let level_main_div_, top_div_, bottom_div_, select_tag_, label_, choice_again_btn_, next_btn_, back_btn_, play_bool, selected_value;
//-----------------------------------------------------------------------------
play_bool = false;
//---------------- start_level function for start the website------------------
export default function start_level() {
	let body = document.getElementsByTagName("body")[0];
	level_main_div();
	top_div();
	bottom_div();
	label();
	select_tag();
	next_btn();
	options_tag(select_tag_);
	back_btn();

	top_div_.append(label_, select_tag_, choice_again_btn_);
	bottom_div_.append(back_btn_, next_btn_);
	level_main_div_.append(top_div_, bottom_div_);
	body.append(level_main_div_);
}
//start_level();
//-----------------------------------------------------------------------------
//--------------------------option_tag-----------------------------------------
function options_tag(append_tag) {
	let options_array = ["Select Difficulty Level", "3x3", "5x5", "7x7"];
	options_array.forEach((option, index) => {
		let option_tag = document.createElement("option");
		option_tag.i = "option_tag";
		option_tag.value = index;
		option_tag.text = option;
		if (option_tag.value == 0) {
			option_tag.disabled = true;
			option_tag.selected = true;
		}
		append_tag.appendChild(option_tag)
	});
	//Checking for 'game_level' is exists in local storage-----------------
	if (read_local_storage_values("game_level") != "") {
		selected_value = Number(read_local_storage_values("game_level"));
		append_tag.options[selected_value].selected = true;
		choice_again_btn_.disabled = false;
		choice_again_btn_.style.cursor = "pointer";
		next_btn_.disabled = false;
		next_btn_.style.cursor = "pointer";
		append_tag.disabled = true;
	}
}
//-----------------------------------------------------------------------------
//-------------------------level main div (parent div)-------------------------
function level_main_div() {
	level_main_div_ = document.createElement("div");
	level_main_div_.id = "select_main_div";
	return level_main_div_;
}
//-----------------------------------------------------------------------------
//----------------------------top div------------------------------------------
function top_div() {
	top_div_ = document.createElement("div");
	top_div_.id = "top_div";
	return top_div_;
}
//-----------------------------------------------------------------------------
//----------------------------bottom div---------------------------------------
function bottom_div() {
	bottom_div_ = document.createElement("div");
	bottom_div_.id = "bottom_div";
	return bottom_div_;
}
//-----------------------------------------------------------------------------
//------------------------------select tag-------------------------------------
function select_tag() {
	select_tag_ = document.createElement("select");
	select_tag_.id = "select_tag";
	choice_again_btn(select_tag_);//choce_again_btn_function---------------
	select_tag_.addEventListener("change", function (e) {
		update_previous_local_storage_values([e.target.value], [["game_level"]]);//previous values and new values updated at a time
		next_btn_.disabled = false;
		next_btn_.style.cursor = "pointer";
		choice_again_btn_.disabled = false;
		choice_again_btn_.style.cursor = "pointer";
		select_tag_.disabled = true;
	})
	return select_tag_;
}
//-----------------------------------------------------------------------------
//-------------------------------label_tag-------------------------------------
function label() {
	label_ = document.createElement("label");
	label_.id = "label_for_select_tag";
	label_.htmlFor = "select_tag";
	label_.innerText = "Choice Difficulty level:";
	return label_;
}
//-----------------------------------------------------------------------------
//----------------------------choice_again_btn---------------------------------
function choice_again_btn(select_tag_) {
	choice_again_btn_ = document.createElement("button");
	choice_again_btn_.innerText = "Choice Again";
	choice_again_btn_.id = "choice_again_btn";
	choice_again_btn_.disabled = true;
	choice_again_btn_.addEventListener("click", function () {
		choice_again_btn_.disabled = true;
		next_btn_.disabled = true;
		[next_btn_, choice_again_btn_].forEach(ele => ele.style.cursor = "not-allowed");
		select_tag_.disabled = false;
	});
	return choice_again_btn_;

}
//-----------------------------------------------------------------------------
//-----------------------------next_btn----------------------------------------
function next_btn() {
	next_btn_ = document.createElement("button");
	next_btn_.id = "next_btn";
	next_btn_.disabled = true;
	next_btn_.innerText = "Next";
	next_btn_.addEventListener("click", async function () {
		play_bool = true;
		update_previous_local_storage_values([play_bool], [["play"]]);//previous values and new values updated at a time
		level_main_div_.remove();
		document.getElementsByTagName("body")[0].style.height = "90svh";
		start_game();
		add_timer();
		live_update(true);
		if (get_accessibility_value() == true) divs_read()[index_read()].style.backgroundColor = "transparent";//checking for accessibility btn value according background-color adding.
		total_moves_helper_function();
		restart_btn_helper_function();
		new_game_btn_helper_function();
		await question_btn();
		await setting_button_function();
	});
	return next_btn_;
}
//-----------------------------------------------------------------------------
//----------------------------back_btn-----------------------------------------
function back_btn() {
	back_btn_ = document.createElement("button");
	back_btn_.id = "back_btn";
	back_btn_.innerText = "Back";
	back_btn_.addEventListener("click", function () {
		level_main_div_.remove()
		start_select_values();
	});
	return back_btn_;
}
//-----------------------------------------------------------------------------
