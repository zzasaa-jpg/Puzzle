import {
	section_read, accessibility_btn_read,
	seconds_update, minutes_update, clear_interval_read,
	total_moves_counter_update, timer_div_read,
	restart_button_read, new_game_button_create,
	new_game_button_read, total_moves_h2_read,
	question_button_read, setting_button_read,
	clear_interval_create,
} from "../../../js/variables.js";
import update_previous_local_storage_values from "../../../game_start_functions_utilities/update_previous_local_storage_values.js"
import start_user_input_name_function from "../../../game_start_functions_utilities/select_game_values/select_game_values_js/select_game_values.js";
import { toggle_accessibility_value, get_accessibility_value } from "../../../accessibility_state.js";
import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
let new_game_btn_, x_point = window.matchMedia("(max-width: 750px)");
export default function new_game_btn_helper_function() {
	new_game_btn_ = document.createElement("button");
	new_game_button_create(new_game_btn_);
	new_game_btn_.innerText = "New Game";
	new_game_btn_.id = "new_game_btn";
	new_game_btn_.addEventListener("click", function () {
		update_previous_local_storage_values(["", false, "", { minute: 0, seconds: 0 }, 0], [["game_level"], ["play"], ["select_game_values"], ["time"], ["total_moves"]]);
		section_read().remove();
		accessibility_btn_read().remove();
		timer_div_read().remove();
		if (clear_interval_read()) {
			clearInterval(clear_interval_read());
			clear_interval_create(null);
		}
		new_game_button_read().remove();
		restart_button_read().remove();
		total_moves_h2_read().remove();
		question_button_read().remove();
		setting_button_read().remove();
		mediaQuery_match(x_point);
		start_user_input_name_function();
		get_accessibility_value() ? toggle_accessibility_value() : "";
		seconds_update(0);
		minutes_update(0);
		total_moves_counter_update(0);
	});
	document.body.append(new_game_btn_);
}

//-------------------responsive logics for mobile devices---------------------
function mediaQuery_match(x_point) {
	if (x_point.matches) {
		if (read_local_storage_values("play") == false) {
			document.getElementsByTagName("body")[0].style.height = "auto";
		}
	} else {
		document.getElementsByTagName("body")[0].style.height = "90vh";
	}
}
//----------------------------------------------------------------------------