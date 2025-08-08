import {toggle_accessbility_value, get_accessbility_value} from "../accessbility_state.js";
import {divs_read, obj_read, 
	index_create, index_read,
	win_pattern_value_read,
	section_read,
} from "./variables.js";
import winning_array from "../winning_array.js";
import move from "./move_function.js";
import win_or_lose from "./win_or_lose_function.js";

//------------------------------ accessbility key functionality -------------------------------
export default function accessbility_key(){
	document.addEventListener("keydown", function (event){
		if (!get_accessbility_value()) return;
		divs_read()[index_read()].style.borderColor = "white";
		let e = event.key; 
		if(["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e)){
			let next = obj_read()[index_read()][e]
			if (next != null && divs_read()[next])
			{
				index_create(next)
			}
			divs_read()[index_read()].style.borderColor = "red";

		}else divs_read()[index_read()].style.borderColor = "red";
		if (e === "Enter") {
			let value = parseInt(divs_read()[index_read()].innerText);
			move(win_pattern_value_read(), value, index_read());
			divs_read()[index_read()].style.borderColor = "red";
			if (win_or_lose(win_pattern_value_read(), winning_array())) {
				section_read().innerHTML = `<h1 class="win_info_h1">Game was won!!!</h1>`;
			}
		}
	});
}
//--------------------------------------------------------------------------------------------
