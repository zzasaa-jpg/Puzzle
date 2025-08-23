//--------------- game start from start game functionalities -----------------
import {write_local_storage_values, read_local_storage_values} from "../Local_Storage/Local_Storage.js";
import start_user_input_name_function from "../game_start_functions_utilities/user_name_input/user_name_js/user_name_input.js";
import start_select_values from "../game_start_functions_utilities/select_game_values/select_game_values_js/select_game_values.js";
import start_game from "../start_game/start_game.js";
write_local_storage_values();

if (read_local_storage_values("play")) start_game();//first condition 'play' value in local storage 
else if (read_local_storage_values("user_name_first_time_value")) start_select_values();//second condition 'user name first time value' in local storage
else {
	start_user_input_name_function();//default start from 'user input'
}
//----------------------------------------------------------------------------

