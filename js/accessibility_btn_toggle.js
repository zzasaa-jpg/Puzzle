import { toggle_accessibility_value, get_accessibility_value } from "../accessibility_state.js";
import { accessibility_btn_read, divs_read, index_read, index_create } from "./variables.js";
import update_previous_local_storage_values from "../game_start_functions_utilities/update_previous_local_storage_values.js";
//------------------------accessbility_btn_toggle_functionality-----------------------
export default function accessibility_btn_toggle() {
	accessibility_btn_read().addEventListener("click", function () {
		let active = toggle_accessibility_value()
		console.log(get_accessibility_value());
		if (active) {
			//Turn ON
			update_previous_local_storage_values([true], [["accessibility_value"]]);
			index_create(0);
			divs_read()[index_read()].style.backgroundColor = "transparent";
			for (let i = 0; i < divs_read().length; i++) {
				divs_read()[i].classList.add("no_click");
			}
		}
		else {
			//Turn OFF
			update_previous_local_storage_values([false], [["accessibility_value"]]);
			divs_read()[index_read()].style.backgroundColor = "#1A535C";
			for (let i = 0; i < divs_read().length; i++) {
				divs_read()[i].classList.remove("no_click");
			}
			index_create(0);
		}
	});
}
//------------------------------------------------------------------------------------
