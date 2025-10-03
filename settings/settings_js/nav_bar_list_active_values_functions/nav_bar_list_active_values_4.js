import { setting_box_right_side_div_read, nav_bar_key_h1_read, div___read } from "../../../js/variables.js";
import nav_bar_key_h1 from "../settings_helper_functions/nav_bar_key_h1_function.js";
import horizontal_rule from "../settings_helper_functions/horizontal_rule.js";
import paragraph from "../settings_helper_functions/paragraph.js";
import create_div_function from "../settings_helper_functions/create_div_function.js";
import call_svg from "../../../timer/timer_js/call_svg.js";

//-------------nav bar list active value 4 function-------------------
export default async function nav_bar_list_active_value_4(value_) {
	setting_box_right_side_div_read().innerHTML = "";
	nav_bar_key_h1(value_);//H1 tag
	let factory_reset_button = document.createElement("button");
	factory_reset_button.id = "factory_reset_button";
	factory_reset_button.addEventListener("click", function () {
		localStorage.removeItem("obj");
		localStorage.setItem("obj", JSON.stringify({
	user_name: "",
	time: { minutes: 0, seconds: 0 },
	select_game_values: "",
	game_level: "",
	user_name_first_time_value: false,
	play: false,
	total_moves: 0,
	best_time: {
		1: { minutes: 0, seconds: 0 },
		2: { minutes: 0, seconds: 0 },
		3: { minutes: 0, seconds: 0 }
	},
	muted: false,
	short_cuts: false,
	accessibility_value: false,

		}))
		window.location.reload();
	})
	factory_reset_button.innerHTML = await call_svg("../../../settings/SVG/reload.svg");
	create_div_function().append(paragraph("This is factory reset. You click the button than LocalStorage all values removes, website start from start point. Your high score details will disappear."), factory_reset_button);//p, button tag
	setting_box_right_side_div_read().append(nav_bar_key_h1_read(), horizontal_rule(), div___read());//h1, hr, div tag
}
//--------------------------------------------------------------------

