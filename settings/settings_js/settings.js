import call_svg from "../../timer/timer_js/call_svg.js";
import nav_bar_list_active_value_2 from "./nav_bar_list_active_values_functions/nav_bar_list_active_values_2.js";
import nav_bar_list_active_value_3 from "./nav_bar_list_active_values_functions/nav_bar_list_active_values_3.js";
import nav_bar_list_active_value_4 from "./nav_bar_list_active_values_functions/nav_bar_list_active_values_4.js";
import {
	setting_box_right_side_div_create, span_of_array_create,
	setting_button_create, live_update
} from "../../js/variables.js";
import { read_local_storage_values } from "../../Local_Storage/Local_Storage.js";

let setting_button, nav_bar_list;
let setting_dialog_ = false;
let nav_bar_list_active_key = 0;
let nav_bar_items_array = ["Sound functionality", "Best time details", "Factory reset"];
let span_of_array = ["S/s => toggle sound of popper", "R/r => reset the game", "N/n => for new game", "P/p => timer pause or play"];
span_of_array_create(span_of_array);
let nav_bar_list_functions_array = [nav_bar_list_active_value_2, nav_bar_list_active_value_3, await nav_bar_list_active_value_4];

//--------------------------setting button ------------------------------
export default async function setting_button_function() {
	setting_button = document.createElement("button");
	setting_button_create(setting_button);
	setting_button.id = "setting_button";
	setting_button.innerHTML = await call_svg("../../settings/SVG/settings-outline.svg");
	document.body.append(setting_button);
	//---------------------setting button toggle event-------------------
	setting_button.addEventListener("click", function () {
		setting_dialog_ = !setting_dialog_;
		live_update(false);
		if (setting_dialog_) {
			document.body.append(setting_dialog);
			setting_dialog.showModal();
			try {
				if (read_local_storage_values("muted")) {
					if (document.getElementById("input")) {
						document.getElementById("input").checked = true;
					}
				} else {
					if (document.getElementById("input")) {
						document.getElementById("input").checked = false;
					}
				}
			} catch (err) {
				console.warn(err);
			}
		}
	});
	//-------------------------------------------------------------------
	return setting_button;
}
//-----------------------------------------------------------------------
//-------------------setting wrapper close button------------------------
let setting_wrapper_close_button = document.createElement("button");
setting_wrapper_close_button.id = "setting_wrapper_close_button"
setting_wrapper_close_button.innerHTML = await call_svg("../../settings/SVG/close.svg");
//-----------------------------------------------------------------------
//--------------------------setting dialog-------------------------------
let setting_dialog = document.createElement("dialog");
setting_dialog.id = "setting_dialog";
//-----------------------------------------------------------------------
//-----------------------setting box left side div-----------------------
let setting_box_left_side_div = document.createElement("div");
setting_box_left_side_div.id = "setting_box_left_side_div";
setting_dialog.append(setting_box_left_side_div);
//-----------------------------------------------------------------------
//-----------------------setting box right side div----------------------
let setting_box_right_side_div = document.createElement("div");
setting_box_right_side_div_create(setting_box_right_side_div);
setting_box_right_side_div.id = "setting_box_right_side_div";
setting_dialog.append(setting_box_right_side_div, setting_wrapper_close_button);
//-----------------------------------------------------------------------
//-------------------------setting box nav bar---------------------------
let setting_box_nav_bar = document.createElement("nav");
setting_box_nav_bar.id = "setting_box_nav_bar";
setting_box_left_side_div.append(setting_box_nav_bar);
//-----------------------------------------------------------------------
//-------------------------nav bar ul tag--------------------------------
let nav_bar_ul = document.createElement("ul");
nav_bar_ul.id = `nav_bar_ul`;
let first_active_key = nav_bar_items_array[0];
nav_bar_items_array.forEach((ele, index) => {
	nav_bar_list = document.createElement("li");
	nav_bar_list.classList.add("nav_bar_list");
	nav_bar_list.setAttribute("nav_id", `${index}`);
	nav_bar_list.textContent += ele;
	nav_bar_ul.append(nav_bar_list);
	nav_bar_list_functions_array[nav_bar_list_active_key](first_active_key);
	nav_bar_list.getAttribute("nav_id") == nav_bar_list_active_key ? nav_bar_list.style.backgroundColor = "#3b3b3f" : "";
	nav_bar_list.addEventListener("click", function () {
		document.querySelectorAll(".nav_bar_list")[nav_bar_list_active_key].removeAttribute("style");
		nav_bar_list_active_key = index;
		document.querySelectorAll(".nav_bar_list")[index].getAttribute("nav_id") == nav_bar_list_active_key ? document.querySelectorAll(".nav_bar_list")[index].style.backgroundColor = "#3b3b3f" : "";
		nav_bar_list_functions_array[nav_bar_list_active_key](ele);
	})
});
setting_box_nav_bar.append(nav_bar_ul);
//-----------------------------------------------------------------------
//------------------setting close button toggle event--------------------
setting_wrapper_close_button.addEventListener("click", function () {
	setting_dialog_ = false;
	setting_dialog.remove();
	setting_dialog.close();
	live_update(true);
});
//-----------------------------------------------------------------------
