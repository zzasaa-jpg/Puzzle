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

