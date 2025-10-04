import { audio_tag_2_read } from "../../../js/variables.js";
import update_previous_local_storage_values from "../../../game_start_functions_utilities/update_previous_local_storage_values.js";
import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
//-------------toggle switch button function--------------------------
export default function toggle_switch_button() {
	let label = document.createElement("label");//label is parent
	label.classList.add("switch");
	let input = document.createElement("input");//input is child
	input.id = "input";
	input.type = "checkbox";
	let span = document.createElement("span");//span is child
	span.classList.add("slider", "round");
	label.append(input, span);
	//---------------'muted' value checking for true or false in local storage values-----------
	try {
		if (read_local_storage_values("muted")) {
			input.checked = true;
		}
	} catch (err) {
		console.error(err);
		window.location.reload();
	}
	//------------------------------------------------------------------------------------------
	input.addEventListener("change", function () {
		if (input.checked) {
			audio_tag_2_read().muted = true;
			update_previous_local_storage_values([true], [["muted"]]);//previous values and new values updated at a time
		} else {
			audio_tag_2_read().muted = false;
			update_previous_local_storage_values([false], [["muted"]]);//previous values and new values updated at a time
		}
	});
	return label;
}
//--------------------------------------------------------------------
