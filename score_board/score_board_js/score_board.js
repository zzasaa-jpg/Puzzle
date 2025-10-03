import {
	section_read, live_update,
	seconds_update, minutes_update,
	total_moves_counter_update,
	divs_read, index_read
} from "../../js/variables.js";
import { read_local_storage_values } from "../../Local_Storage/Local_Storage.js";
import update_previous_local_storage_values from "../../../game_start_functions_utilities/update_previous_local_storage_values.js"
import start_user_input_name_function from "../../../game_start_functions_utilities/select_game_values/select_game_values_js/select_game_values.js";
import start_game from "../../../start_game/start_game.js";
import add_timer from "../../../timer/timer_js/timer.js";
import { toggle_accessibility_value, get_accessibility_value } from "../../accessibility_state.js";
import { total_moves_helper_function } from "../../game_helper_functions/total_moves/total_moves_js/total_moves.js";
import restart_btn_helper_function from "../../game_helper_functions/restart_btn/restart_btn_js/restart_btn.js";
import new_game_btn_helper_function from "../../game_helper_functions/new_game_btn/new_game_btn_js/new_game_btn.js";
import question_btn from "../../question_btn/question_btn_js/question_btn.js";
import setting_button_function from "../../settings/settings_js/settings.js";
import { update_the_move_in_UI } from "../../game_helper_functions/total_moves/total_moves_js/total_moves.js";
import score_board_body_height from "../../responsive_layout_utilities/score_board_body_height.js";
//-----------------------------score board variables-------------------------------------------
let score_board_body_, score_board_h1_, time_h2_, moves_h2_, best_time_h2_, time_h2_and_moves_h2_div_, play_again_button_, new_game_button_, play_again_button_and_new_game_button_div_;
//---------------------------------------------------------------------------------------------
//-------------------------export function score_board-----------------------------------------
export default function score_board() {
	section_read().append(create_score_board());
	document.getElementsByTagName("body")[0].style.display = "block";
	section_read().style.display = "flex";
	section_read().style.flexDirection = "column";
	section_read().style.padding = 0;
	section_read().style.overflows = "none";
	section_read().style.justifyContent = "center";
	section_read().style.alignItems = "center";
	section_read().style.gap = 0;
	score_board_body_.append(score_board_h1(), score_board_time_h2_and_moves_h2_div());
	time_h2_and_moves_h2_div_.append(score_board_time_h2(), score_board_moves_h2());
	score_board_body_.append(score_board_best_time_h2());
	score_board_body_.append(score_board_play_again_button_and_new_game_butto_div())
	play_again_button_and_new_game_button_div_.append(score_board_play_again_button(), score_board_new_game_button());
}
//---------------------------------------------------------------------------------------------
//---------------------------create score board body-------------------------------------------
function create_score_board() {
	score_board_body_ = document.createElement("div");
	score_board_body_.id = "score_board_body";
	return score_board_body_;
}
//---------------------------------------------------------------------------------------------
//-----------------------------score board h1 tag----------------------------------------------
function score_board_h1() {
	score_board_h1_ = document.createElement("h1");
	score_board_h1_.id = "score_board_h1";
	score_board_h1_.innerText = "Score Board";
	return score_board_h1_;
}
//---------------------------------------------------------------------------------------------
//---------------------------score board time h2 tag-------------------------------------------
function score_board_time_h2() {
	time_h2_ = document.createElement("h2");
	time_h2_.id = "time_h2";
	time_h2_.innerText = `Total Time: ${read_local_storage_values("time").minutes}:${read_local_storage_values("time").seconds}`;
	return time_h2_;
}
//---------------------------------------------------------------------------------------------
//---------------------------score board moves h2 tag------------------------------------------
function score_board_moves_h2() {
	moves_h2_ = document.createElement("h2");
	moves_h2_.id = "moves_h2";
	moves_h2_.innerText = `Total Moves: ${read_local_storage_values("total_moves")}`;
	return moves_h2_;
}
//---------------------------------------------------------------------------------------------
//---------------------------score board best time h2------------------------------------------
function score_board_best_time_h2() {
	best_time_h2_ = document.createElement("h2");
	best_time_h2_.id = "best_time_h2";
	best_time_calculate();
	let best_time = read_local_storage_values("best_time")[Number(read_local_storage_values("game_level"))];
	best_time_h2_.innerText = `Best Time: ${best_time.minutes}:${best_time.seconds}`;
	return best_time_h2_;
}
//---------------------------------------------------------------------------------------------
//----------------------score board time and moves h2 div--------------------------------------
function score_board_time_h2_and_moves_h2_div() {
	time_h2_and_moves_h2_div_ = document.createElement("div");
	time_h2_and_moves_h2_div_.id = "time_h2_and_moves_h2_div";
	return time_h2_and_moves_h2_div_;
}
//---------------------------------------------------------------------------------------------
//-------------------------score board play again button tag-----------------------------------
function score_board_play_again_button() {
	play_again_button_ = document.createElement("button");
	play_again_button_.id = "play_again_button";
	play_again_button_.innerText = "Play Again";
	play_again_button_.addEventListener("click", async function () {
		document.getElementsByTagName("body")[0].style.display = "flex";
		section_read().remove();
		start_game();
		add_timer();
		total_moves_helper_function();
		restart_btn_helper_function();
		new_game_btn_helper_function();
		await question_btn();
		await setting_button_function();
		update_previous_local_storage_values([{ minutes: 0, seconds: 0 }, 0], [["time"], ["total_moves"]]);
		seconds_update(0);
		minutes_update(0);
		total_moves_counter_update(0);
		update_the_move_in_UI();
		live_update(true);
		if (get_accessibility_value() == true) divs_read()[index_read()].style.backgroundColor = "transparent";
	});
	return play_again_button_;
}
//---------------------------------------------------------------------------------------------
//-------------------------score board new game button tag-------------------------------------
function score_board_new_game_button() {
	new_game_button_ = document.createElement("button");
	new_game_button_.id = "new_game_button";
	new_game_button_.innerText = "New Game";
	new_game_button_.addEventListener("click", function () {
		update_previous_local_storage_values(["", false, "", { minutes: 0, seconds: 0 }, 0], [["game_level"], ["play"], ["select_game_values"], ["time"], ["total_moves"]]);
		document.getElementsByTagName("body")[0].style.display = "flex";
		score_board_body_height(window.matchMedia("(max-width: 750px)"));
		section_read().remove();
		start_user_input_name_function();
		get_accessibility_value() ? toggle_accessibility_value() : "";
		seconds_update(0);
		minutes_update(0);
		total_moves_counter_update(0);
	})
	return new_game_button_;
}
//---------------------------------------------------------------------------------------------
//--------------------score board play again and new game button div---------------------------
function score_board_play_again_button_and_new_game_butto_div() {
	play_again_button_and_new_game_button_div_ = document.createElement("div");
	play_again_button_and_new_game_button_div_.id = "play_again_button_and_new_game_button_div";
	return play_again_button_and_new_game_button_div_;
}
//---------------------------------------------------------------------------------------------
//--------------------------best time calculate function---------------------------------------
/* first condition was initial point; second condition was local storage values 'time' is less
 * than local storage values 'best_time'; else return*/
function best_time_calculate() {
	let best_time = read_local_storage_values("best_time")[Number(read_local_storage_values("game_level"))];
	if (Number(best_time.minutes) == 0 && Number(best_time.seconds) == 0) {
		update_previous_local_storage_values([read_local_storage_values("time")], [["best_time", Number(read_local_storage_values("game_level"))]]);
	} else if (Number(read_local_storage_values("time").minutes) < Number(best_time.minutes) || Number(read_local_storage_values("time").seconds) < Number(best_time.seconds)) {
		update_previous_local_storage_values([read_local_storage_values("time")], [["best_time", Number(read_local_storage_values("game_level"))]]);
	} else return;
}
//---------------------------------------------------------------------------------------------
