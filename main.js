//--------------- game start from start game functionalities -----------------
import { write_local_storage_values, read_local_storage_values } from "../Local_Storage/Local_Storage.js";
import start_user_input_name_function from "../game_start_functions_utilities/user_name_input/user_name_js/user_name_input.js";
import start_select_values from "../game_start_functions_utilities/select_game_values/select_game_values_js/select_game_values.js";
import add_timer from "../timer/timer_js/timer.js";
import start_game from "../start_game/start_game.js";
import { total_moves_helper_function } from "../game_helper_functions/total_moves/total_moves_js/total_moves.js";
import restart_btn_helper_function from "../game_helper_functions/restart_btn/restart_btn_js/restart_btn.js";
import new_game_btn_helper_function from "../game_helper_functions/new_game_btn/new_game_btn_js/new_game_btn.js";
import question_btn from "../../question_btn/question_btn_js/question_btn.js";
import setting_button_function from "../settings/settings_js/settings.js";
import { total_moves_counter_update, accessibility_btn_read } from "./js/variables.js";
import update_previous_local_storage_values from "./game_start_functions_utilities/update_previous_local_storage_values.js";
import { update_the_move_in_UI } from "./game_helper_functions/total_moves/total_moves_js/total_moves.js";
write_local_storage_values();

if (read_local_storage_values("play")) {
	start_game();
	add_timer();
	total_moves_helper_function();
	restart_btn_helper_function();
	new_game_btn_helper_function();
	question_btn();
	setting_button_function();
}
else if (read_local_storage_values("user_name_first_time_value")) start_select_values();
else {
	start_user_input_name_function();//default start from 'user input'
}
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
/*if website is reloaded or refreshed than total_moves_counter equal to '0'*/
if (read_local_storage_values("play")) {
	if (window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
		update_previous_local_storage_values([0], [["total_moves"]]);
		total_moves_counter_update(0);
		update_the_move_in_UI();
	} else if (window.performance.navigation.type === window.performance.navigation.TYPE_REFRESH) {
		update_previous_local_storage_values([0], [["total_moves"]]);
		total_moves_counter_update(0);
		update_the_move_in_UI();
	}
}
//----------------------------------------------------------------------------

//-------------------responsive logics for mobile devices---------------------
let x_point = window.matchMedia("(max-width: 750px)");
function mediaQuery_match(x_point) {
	if (x_point.matches) {
		if (accessibility_btn_read()) accessibility_btn_read().disabled = true;
		if (read_local_storage_values("play") == false) {
			document.getElementsByTagName("body")[0].style.height = "auto";
		}

	} else {
		if (accessibility_btn_read()) accessibility_btn_read().disabled = false;
		document.getElementsByTagName("body")[0].style.height = "90vh";
	}
}

mediaQuery_match(x_point);

x_point.addEventListener("change", function () {
	mediaQuery_match(x_point);
})
//----------------------------------------------------------------------------
