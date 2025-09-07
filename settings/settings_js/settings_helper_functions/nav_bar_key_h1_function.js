import { nav_bar_key_h1_create, nav_bar_key_h1_read } from "../../../js/variables.js";
//------------------nav bar key h1 function----------------------------
export default function nav_bar_key_h1(value_) {
	nav_bar_key_h1_create(document.createElement("h1"));
	nav_bar_key_h1_read().style.margin = "10px 0";
	nav_bar_key_h1_read().style.marginRight = "30px";
	nav_bar_key_h1_read().innerText = value_;
	return nav_bar_key_h1_read();
}
//---------------------------------------------------------------------
