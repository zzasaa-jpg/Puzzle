import {
	section_read, accessibility_btn_read,
	live_update, seconds_update, minutes_update,
	clear_interval_read, total_moves_counter_update,
	divs_read, index_read, timer_div_read, restart_button_create
} from "../../../js/variables.js";
import update_previous_local_storage_values from "../../../game_start_functions_utilities/update_previous_local_storage_values.js"
import start_game from "../../../start_game/start_game.js";
import add_timer from "../../../timer/timer_js/timer.js";
import { get_accessibility_value } from "../../../accessibility_state.js";
import { update_the_move_in_UI } from "../../../game_helper_functions/total_moves/total_moves_js/total_moves.js";
let restart_btn_;
export default function restart_btn_helper_function() {
	restart_btn_ = document.createElement("button");
	restart_button_create(restart_btn_);
	restart_btn_.innerText = "Restart";
	restart_btn_.id = "restart_btn";
	restart_btn_.addEventListener("click", function () {
		update_previous_local_storage_values([{ minute: 0, seconds: 0 }, 0], [["time"], ["total_moves"]]);
		section_read().remove();
		timer_div_read().remove();
		live_update(false);
		accessibility_btn_read().remove();
		clearInterval(clear_interval_read())
		start_game();
		add_timer();
		live_update(true);
		seconds_update(0);
		minutes_update(0);
		total_moves_counter_update(0);
		if (get_accessibility_value() == true) divs_read()[index_read()].style.backgroundColor = "transparent";
		update_the_move_in_UI()
	})
	document.body.append(restart_btn_);
}
