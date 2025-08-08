import {section_create, section_read,
	div_create, div_read,
	win_pattern_value_read,
} from "./variables.js";
import {toggle_accessbility_value, get_accessbility_value} from "../accessbility_state.js";

//--------------------------- start from 8 index to zero ----------------------------
export default function start_(zero_value){
	let currentIndex = 0;
	for (let row = 0; row < 3; row++){
		for (let col = 0; col < 3; col++){
			div_create(document.createElement("div"));
			div_read().classList.add("div")
			let value = get_accessbility_value();
			if (value){
				div_read().classList.add("no_click");
			}
			if(currentIndex == zero_value){
				div_read().innerText = '';
			} else {
				div_read().innerText = win_pattern_value_read()[row][col];
			}
			section_read().appendChild(div_read());
			currentIndex++;
		}
	}
}
//-----------------------------------------------------------------------------------
