import { setting_box_right_side_div_read, nav_bar_key_h1_read, div___read } from "../../../js/variables.js";
import nav_bar_key_h1 from "../settings_helper_functions/nav_bar_key_h1_function.js";
import horizontal_rule from "../settings_helper_functions/horizontal_rule.js";
import paragraph from "../settings_helper_functions/paragraph.js";
import create_div_function from "../settings_helper_functions/create_div_function.js";
import toggle_switch_button from "../settings_helper_functions/toggle_switch_button.js"
//--------------nav bar list active value 2 function-------------------
export default function nav_bar_list_active_value_2(value_) {
	setting_box_right_side_div_read().innerHTML = "";
	nav_bar_key_h1(value_);
	create_div_function().append(paragraph("On/Off popper sound: "), toggle_switch_button());//p, button tag
	setting_box_right_side_div_read().append(nav_bar_key_h1_read(), horizontal_rule(), div___read());
}
//---------------------------------------------------------------------