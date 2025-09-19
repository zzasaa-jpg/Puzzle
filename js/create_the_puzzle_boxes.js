import {
	section_read,
	div_create, div_read,
	win_pattern_value_read,
	divs_read
} from "./variables.js";
import { get_accessibility_value } from "../accessibility_state.js";
import puzzle_length_according_local_storage_value from "./puzzle_length_according_local_storage_value.js";
import { read_local_storage_values } from "../Local_Storage/Local_Storage.js";

//--------- create the puzzle boxes from random values ------------------------------
export default function create_the_puzzle_boxes() {
	let currentIndex = 0;
	for (let row = 0; row < puzzle_length_according_local_storage_value(read_local_storage_values("game_level"), [3, 5, 7]); row++) {
		for (let col = 0; col < puzzle_length_according_local_storage_value(read_local_storage_values("game_level"), [3, 5, 7]); col++) {
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

	//------- local storage value 'game_level' according puzzle boxes styles change and----
	//-------------------responsive logics for mobile devices------------------------------
	let x_point = window.matchMedia("(max-width: 750px)");
	function mediaQuery_match(x_point) {
		if (x_point.matches) {
			if (read_local_storage_values("game_level") == "1") {
				[...divs_read()].forEach(div => {
					if (read_local_storage_values("select_game_values") == "2" || read_local_storage_values("select_game_values") == "3") {
						div.style.fontSize = "3rem";
					}
				})
			}
			else if (read_local_storage_values("game_level") == "2") {
				section_read().style.gridTemplateColumns = "repeat(5, 1fr)";
				[...divs_read()].forEach(div => {
					div.style.width = "60px";
					div.style.height = "60px";
					if (read_local_storage_values("select_game_values") == "2" || read_local_storage_values("select_game_values") == "3") {
						div.style.fontSize = "1.2rem";
					}
					else div.style.fontSize = "2rem";
				})
			} else if (read_local_storage_values("game_level") == "3") {
				section_read().style.gridTemplateColumns = "repeat(7, 1fr)";
				[...divs_read()].forEach(div => {
					div.style.width = "40px";
					div.style.height = "40px";
					if (read_local_storage_values("select_game_values") == "2" || read_local_storage_values("select_game_values") == "3") {
						div.style.fontSize = "0.8rem";
						div.style.overflowWrap = "anywhere";
					}
					else div.style.fontSize = "1.8rem";
				})
			}

		} else {
			if (read_local_storage_values("game_level") == "1") {
				[...divs_read()].forEach(div => {
					if (read_local_storage_values("select_game_values") == "2" || read_local_storage_values("select_game_values") == "3") {
						div.style.fontSize = "4rem";
					}
				})
			}
			else if (read_local_storage_values("game_level") == "2") {
				section_read().style.gridTemplateColumns = "repeat(5, 1fr)";
				[...divs_read()].forEach(div => {
					div.style.width = "100px";
					div.style.height = "100px";
					if (read_local_storage_values("select_game_values") == "2" || read_local_storage_values("select_game_values") == "3") {
						div.style.fontSize = "2rem";
					}
					else div.style.fontSize = "3rem";
				})
			} else if (read_local_storage_values("game_level") == "3") {
				section_read().style.gridTemplateColumns = "repeat(7, 1fr)";
				[...divs_read()].forEach(div => {
					div.style.width = "60px";
					div.style.height = "60px";
					if (read_local_storage_values("select_game_values") == "2" || read_local_storage_values("select_game_values") == "3") {
						div.style.fontSize = "1.4rem";
						div.style.overflowWrap = "anywhere";
					}
					else div.style.fontSize = "2.5rem";
				})
			}
		}
	}

	mediaQuery_match(x_point);

	x_point.addEventListener("change", function () {
		mediaQuery_match(x_point);
	})
	//-------------------------------------------------------------------------------------
}
//-----------------------------------------------------------------------------------
