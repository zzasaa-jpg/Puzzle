import { read_local_storage_values } from "../Local_Storage/Local_Storage.js";
import winning_array from "../winning_array.js";
import {
	section_read, win_pattern_value_read,
	timer_div_read, live_update, total_moves_counter_create,
	total_moves_counter_read, total_moves_counter_update,
	accessibility_btn_read, total_moves_h2_read, question_button_read,
	new_game_button_read, restart_button_read, setting_button_read,
	clear_interval_read, clear_interval_create,
} from "./variables.js";
import move from "./move_function.js";
import win_or_lose from "./win_or_lose_function.js";
import { fire_audio, confetti_function } from "../confetti_popper/confetti_popper.js";
import score_board from "../score_board/score_board_js/score_board.js";
import update_previous_local_storage_values from "../../game_start_functions_utilities/update_previous_local_storage_values.js";
import { update_the_move_in_UI } from "../game_helper_functions/total_moves/total_moves_js/total_moves.js";
try {
	total_moves_counter_create(read_local_storage_values("total_moves"));
}
catch (err) {
	console.error(err);
}
//----------------------- render the boxes according the array ----------------------
export default function render_the_boxes() {
	let div_ = document.querySelectorAll(".div");
	div_.forEach((ele, index) => {
		if (ele.innerText == "0") ele.innerText = "";
		ele.addEventListener("click", function () {
			total_moves_counter_update(total_moves_counter_read() + 1);
			update_previous_local_storage_values([total_moves_counter_read()], [["total_moves"]]);
			update_the_move_in_UI();
			move(win_pattern_value_read(), ele.innerText, index);
			if (win_or_lose(win_pattern_value_read(), winning_array()[read_local_storage_values("game_level")][read_local_storage_values("select_game_values")])) {
				section_read().innerHTML = '';
				section_read().innerHTML = `<h1 class="win_info_h1">You won the game!!!</h1>`;
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
			else console.log("")
		})
	})
}
//-----------------------------------------------------------------------------------
