import {
	section_read,
	div_create, div_read,
	win_pattern_value_read,
} from "./variables.js";
import { get_accessibility_value } from "../accessibility_state.js";
import puzzle_length_according_local_storage_value from "./puzzle_length_according_local_storage_value.js";
import {read_local_storage_values} from "../Local_Storage/Local_Storage.js";

//--------- create the puzzle boxes from random values ------------------------------
export default function create_the_puzzle_boxes() {
	let currentIndex = 0;
	for (let row = 0; row < puzzle_length_according_local_storage_value(read_local_storage_values("game_level"),[3,5,7]); row++) {
		for (let col = 0; col < puzzle_length_according_local_storage_value(read_local_storage_values("game_level"),[3,5,7]); col++) {
			div_create(document.createElement("div"));
			div_read().classList.add("div")
			let value = get_accessibility_value();
			if (value) {
				div_read().classList.add("no_click");
			}
			div_read().innerText = win_pattern_value_read()[row][col];
			section_read().appendChild(div_read());
			currentIndex++;
		}
	}
}
//-----------------------------------------------------------------------------------
