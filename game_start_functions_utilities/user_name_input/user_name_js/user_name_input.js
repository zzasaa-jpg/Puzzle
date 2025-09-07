import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
import start_select_values from "../../select_game_values/select_game_values_js/select_game_values.js";
import update_previous_local_storage_values from "../../update_previous_local_storage_values.js";
//----------------------variables creating-------------------------------------
let body, main_div_, logo_, input_label_div_, label_, user_name, next_btn_, value, user_name_first_time_value_bool;
//-----------------------------------------------------------------------------
value = 0;
user_name_first_time_value_bool = false;
/*--user input name function for grtting the user name and store in local -----
 * storage*/
body = document.getElementsByTagName("body")[0];
export default function start_user_input_name_function() {
	body.append(main_div());
	main_div_.append(logo(), input_label_div());
	input_label_div_.append(label(), user_name_input(), next_btn());
}
window.addEventListener("click", function (e) {
	if (value != 0) return;
	else {
		if (label_) label_.style.top = "12px";
		else return;
	}
})
//-----------------------------------------------------------------------------
//------------------------main div (parent div)--------------------------------
function main_div() {
	main_div_ = document.createElement("div");
	main_div_.id = "user_input_div";
	return main_div_;
}
//-----------------------------------------------------------------------------
//----------------------------image of logo------------------------------------
function logo() {
	logo_ = document.createElement("img");
	logo_.id = "logo";
	logo_.style.width = "100px";
	logo_.style.height = "100px";
	logo_.src = "../game_start_functions_utilities/logo_0.png";
	logo_.alt = "logo";
	return logo_;
}
//-----------------------------------------------------------------------------
//---------------------------input label div-----------------------------------
function input_label_div() {
	input_label_div_ = document.createElement("div");
	input_label_div_.id = "input_label_div";
	return input_label_div_;
}
//-----------------------------------------------------------------------------
//------------------------------label tag--------------------------------------
function label() {
	label_ = document.createElement("label");
	label_.id = "user_input_label";
	label_.htmlFor = "user_name";
	label_.innerText = "What is your name ?";
	return label_;
}
//-----------------------------------------------------------------------------
//------------------------------input tag--------------------------------------
function user_name_input() {
	user_name = document.createElement("input");
	user_name.id = "user_name";
	user_name.setAttribute("maxLength", 10);
	user_name.setAttribute("minLength", 4);
	user_name.setAttribute("required", "");
	user_name.setAttribute("type", "text");
	user_name.placeholder = " ";

	//Checking for 'user_name' is exists in local storage------------------
	if (read_local_storage_values("user_name") != "") {
		value = read_local_storage_values("user_name");
		user_name_length_check(value);
		user_name.value = read_local_storage_values("user_name");
		label_.style.top = "-10px";
	}

	user_name.addEventListener("click", function (e) {
		label_.style.top = "-10px";
		e.stopPropagation();
	});

	user_name.addEventListener("input", function (e) {
		value = e.target.value;
		next_btn_.disabled = false;
		next_btn_.style.cursor = "pointer";
		user_name_length_check(value);
	});
	function user_name_length_check(value) {
		if (value.length == 0) {
			value = 0;
			next_btn_.disabled = true;
			next_btn_.style.cursor = "not-allowed";
		}
		if (value.length < 4) {
			next_btn_.disabled = true;
			next_btn_.style.cursor = "not-allowed";
		}
	}
	return user_name;
}
//-----------------------------------------------------------------------------
//------------------------------next button------------------------------------
function next_btn() {
	next_btn_ = document.createElement("button");
	next_btn_.id = "next_btn_for_user_name_input";
	next_btn_.innerText = "Next";
	next_btn_.disabled = true;
	user_name_length_is_correct_than_next_btn_disable_false(value);
	next_btn_.addEventListener("click", function () {
		user_name_first_time_value_bool = true;//user_name_first_time_value update to 'TRUE'
		update_previous_local_storage_values([value, user_name_first_time_value_bool], [["user_name"], ["user_name_first_time_value"]]);//previous values and new values updated at a time
		main_div_.remove();
		start_select_values();
	});
	return next_btn_;
}
//-----------------------------------------------------------------------------
/*---------user name length is correct than next button disbale false ---------
 * it(input length validation)*/
function user_name_length_is_correct_than_next_btn_disable_false(value) {
	if (value.length >= 4) {
		next_btn_.disabled = false;
		next_btn_.style.cursor = "pointer";
	}
}
//-----------------------------------------------------------------------------
