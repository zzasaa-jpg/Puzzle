import start_level from "../../game_level/game_level_js/game_level.js";
import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
import update_previous_local_storage_values from "../../update_previous_local_storage_values.js";

import start_user_input_name_function from "../../user_name_input/user_name_js/user_name_input.js";
//----------------------variables creating-------------------------------------
let select_main_div_, top_div_, bottom_div_, select_tag_, label_, choice_again_btn_, next_btn_, back_btn_, selected_value;
//-----------------------------------------------------------------------------
//---------start_select_values function for start the website------------------
export default function start_select_values() {
	let body = document.getElementsByTagName("body")[0];
	select_main_div();
	top_div();
	bottom_div();
	label();
	select_tag();
	next_btn();
	options_tag(select_tag_);
	back_btn();

	top_div_.append(label_, select_tag_, choice_again_btn_);
	bottom_div_.append(back_btn_, next_btn_);
	select_main_div_.append(top_div_, bottom_div_);
	body.append(select_main_div_);
}
//start_select_values();
//-----------------------------------------------------------------------------
//--------------------------option_tag-----------------------------------------
function options_tag(append_tag) {
	let options_array = ["Select_Values", "English Digits(1-8)", "Capital Roman Digits(I-VII)", "Small Roman Digits(i-vii)", "Capital Alphabets(A-H)", "Samll Alphabets(a-h)"];
	options_array.forEach((option, index) => {
		let option_tag = document.createElement("option");
		option_tag.id = "option_tag";
		option_tag.value = index;
		option_tag.text = option;
		option_tag.selected = false;
		if (option_tag.value == 0) {
			option_tag.disabled = true;
			option_tag.selected = true;
		}
		append_tag.appendChild(option_tag);
	});
	//Checking for 'select_game_values' is exists in local storage---------
	if (read_local_storage_values("select_game_values") != "") {
		selected_value = Number(read_local_storage_values("select_game_values"));
		append_tag.options[selected_value].selected = true;
		choice_again_btn_.disabled = false;
		choice_again_btn_.style.cursor = "pointer";
		next_btn_.disabled = false;
		next_btn_.style.cursor = "pointer";
		append_tag.disabled = true;
	}
}
//-----------------------------------------------------------------------------
//------------------------select main div (parent div)-------------------------
function select_main_div() {
	select_main_div_ = document.createElement("div");
	select_main_div_.id = "select_main_div";
	return select_main_div_;
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
		update_previous_local_storage_values([e.target.value], [["select_game_values"]]);//previous values and new values updated at a time
		next_btn_.disabled = false;
		next_btn_.style.cursor = "pointer";
		choice_again_btn_.disabled = false;
		choice_again_btn_.style.cursor = "pointer";
		select_tag_.disabled = true;
	});
	return select_tag_;
}
//-----------------------------------------------------------------------------
//-------------------------------label_tag-------------------------------------
function label() {
	label_ = document.createElement("label");
	label_.id = "label_for_select_tag";
	label_.htmlFor = "select_tag";
	label_.innerText = "Choice playing value:";
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
	next_btn_.addEventListener("click", function () {
		select_main_div_.remove();
		start_level();
	})
	return next_btn_;
}
//-----------------------------------------------------------------------------
//----------------------------back_btn-----------------------------------------
function back_btn() {
	back_btn_ = document.createElement("button");
	back_btn_.id = "back_btn";
	back_btn_.innerText = "Back";
	back_btn_.addEventListener("click", function () {
		select_main_div_.remove();
		start_user_input_name_function();
	});
	return back_btn_;
}
//-----------------------------------------------------------------------------
