import winning_array from "../winning_array.js";
import {section_create, section_read,
	win_pattern_value_create, win_pattern_value_read,
} from "./variables.js";
import move from "./move_function.js";
import win_or_lose from "./win_or_lose_function.js";

//----------------------- render the boxes according the array ----------------------
export default function render_the_boxes(){
	let div_ = document.querySelectorAll(".div");
	div_.forEach((ele, index) => {
	//if (ele.getAttribute("data") == 0) ele.style.backgroundColor = "";
		ele.addEventListener("click", function(){
			console.log(win_pattern_value_read());
			move(win_pattern_value_read(), parseInt(ele.innerText), index);
			if(win_or_lose(win_pattern_value_read(), winning_array())) {
				section_read().innerHTML = '';
				section_read().innerHTML =`<h1 class="win_info_h1">Game was won!!!</h1>`;
			}
			else console.log("")
		})
	})
}
//-----------------------------------------------------------------------------------
