import { setting_box_right_side_div_read, nav_bar_key_h1_read, div___read } from "../../../js/variables.js";
import nav_bar_key_h1 from "../settings_helper_functions/nav_bar_key_h1_function.js";
import horizontal_rule from "../settings_helper_functions/horizontal_rule.js";
import paragraph from "../settings_helper_functions/paragraph.js";
import create_div_function from "../settings_helper_functions/create_div_function.js";
import update_previous_local_storage_values from "../../../game_start_functions_utilities/update_previous_local_storage_values.js";
import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
//--------------nav bar list active value 3 function------------------
export default function nav_bar_list_active_value_3(value_) {
	setting_box_right_side_div_read().innerHTML = "";
	nav_bar_key_h1(value_);//H1 tag
	let reset_button = document.createElement("button");
	reset_button.id = "reset_button";
	reset_button.innerText = "Reset";
	reset_button.addEventListener("click", function () {
		update_previous_local_storage_values([{ minutes: 0, seconds: 0 }], [["best_time"]]);//previous values and new values updated at a time
		document.getElementById("div__").remove();
		create_div_function().append(paragraph(`Best time: ${read_local_storage_values("best_time").minutes}:${read_local_storage_values("best_time").seconds}`), reset_button);
		setting_box_right_side_div_read().append(div___read());
	});
	create_div_function().append(paragraph(`Best time: ${read_local_storage_values("best_time").minutes}:${read_local_storage_values("best_time").seconds}`), reset_button);//p, button tag
	setting_box_right_side_div_read().append(nav_bar_key_h1_read(), horizontal_rule(), div___read());//h1, hr, div tag
}
//--------------------------------------------------------------------

