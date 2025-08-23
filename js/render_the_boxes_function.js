import {read_local_storage_values} from "../Local_Storage/Local_Storage.js"; 
import winning_array from "../winning_array.js";
import {
	section_read, win_pattern_value_read,
} from "./variables.js";
import move from "./move_function.js";
import win_or_lose from "./win_or_lose_function.js";

//----------------------- render the boxes according the array ----------------------
export default function render_the_boxes() {
	let div_ = document.querySelectorAll(".div");
	div_.forEach((ele, index) => {
		if (ele.innerText == "0") ele.innerText = "";
		ele.addEventListener("click", function () {
			move(win_pattern_value_read(), ele.innerText, index);
			if (win_or_lose(win_pattern_value_read(), winning_array()[read_local_storage_values("game_level")][read_local_storage_values("select_game_values")])) {
				section_read().innerHTML = '';
				section_read().innerHTML = `<h1 class="win_info_h1">Game was won!!!</h1>`;
			}
			else console.log("")
		})
	})
}
//-----------------------------------------------------------------------------------
