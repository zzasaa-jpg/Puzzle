import { get_accessibility_value } from "../accessibility_state.js";
import { read_local_storage_values } from "../Local_Storage/Local_Storage.js";
import {
	divs_read, obj_read,
	index_create, index_read,
	win_pattern_value_read,
	section_read, timer_div_read, live_update,
	total_moves_counter_read, total_moves_counter_update,
	restart_button_read, total_moves_h2_read, accessibility_btn_read, question_button_read,
	new_game_button_read, setting_button_read, clear_interval_read, clear_interval_create,
} from "./variables.js";
import winning_array from "../winning_array.js";
import move from "./move_function.js";
import win_or_lose from "./win_or_lose_function.js";
import { fire_audio, confetti_function } from "../confetti_popper/confetti_popper.js";
import score_board from "../score_board/score_board_js/score_board.js";
import update_previous_local_storage_values from "../../game_start_functions_utilities/update_previous_local_storage_values.js";
import { update_the_move_in_UI } from "../game_helper_functions/total_moves/total_moves_js/total_moves.js";
//------------------------------ accessbility key functionality -------------------------------
export default function accessbility_key() {
	document.addEventListener("keydown", accesibility_key_eventlistener_function);
}
//--------------------------------------------------------------------------------------------
function accesibility_key_eventlistener_function() {
	if (get_accessibility_value() == false) return;
	total_moves_counter_update(total_moves_counter_read() + 1);
	update_previous_local_storage_values([total_moves_counter_read()], [["total_moves"]]);
	update_the_move_in_UI();
	divs_read()[index_read()].style.backgroundColor = "#1A535C";
	let e = event.key;
	if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e)) {
		let next = obj_read(read_local_storage_values("game_level"))[index_read()][e];
		if (next != null && divs_read()[next]) {
			index_create(next);
		}
		divs_read()[index_read()].style.backgroundColor = "transparent";
	} else divs_read()[index_read()].style.backgroundColor = "transparent";
	if (e === "Enter") {
		let value = divs_read()[index_read()].innerText;
		move(win_pattern_value_read(), value, index_read());
		divs_read()[index_read()].style.backgroundColor = "transparent";
		if (win_or_lose(win_pattern_value_read(), winning_array()[read_local_storage_values("game_level")][read_local_storage_values("select_game_values")])) {
			section_read().innerHTML = `<h1 class="win_info_h1">Game was won!!!</h1>`;
			timer_div_read().remove();
			if (clear_interval_read()) {
				clearInterval(clear_interval_read());
				clear_interval_create(null);
			}
			accessibility_btn_read().remove();
			question_button_read().remove();
			total_moves_h2_read().remove();
			new_game_button_read().remove();
			restart_button_read().remove();
			setting_button_read().remove();
			live_update(false);
			fire_audio();
			confetti_function();
			score_board();
		}
	}
}