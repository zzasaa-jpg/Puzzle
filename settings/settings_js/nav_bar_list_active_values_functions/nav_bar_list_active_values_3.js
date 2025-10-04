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
	let value, update_value;
	if (read_local_storage_values("game_level") == '1') { value = read_local_storage_values("best_time_1"); update_value = "best_time_1"; }
	else if (read_local_storage_values("game_level") == '2') { value = read_local_storage_values("best_time_2"); update_value = "best_time_2"; }
	else { value = read_local_storage_values("best_time_3"); update_value = "best_time_3" };
	reset_button.addEventListener("click", function () {
		update_previous_local_storage_values([{ minutes: 0, seconds: 0 }], [[update_value]]);//previous values and new values updated at a time
		document.getElementById("div__").remove();
		let after_update_value;
		if (read_local_storage_values("game_level") == '1') after_update_value = read_local_storage_values("best_time_1");
		else if (read_local_storage_values("game_level") == '2') after_update_value = read_local_storage_values("best_time_2");
		else after_update_value = read_local_storage_values("best_time_3");
		create_div_function().append(paragraph(`Best time: ${after_update_value.minutes}:${after_update_value.seconds}`), reset_button);
		setting_box_right_side_div_read().append(div___read());
	});
	create_div_function().append(paragraph(`Best time: ${value.minutes}:${value.seconds}`), reset_button);//p, button tag
	setting_box_right_side_div_read().append(nav_bar_key_h1_read(), horizontal_rule(), div___read());//h1, hr, div tag
}
//--------------------------------------------------------------------

