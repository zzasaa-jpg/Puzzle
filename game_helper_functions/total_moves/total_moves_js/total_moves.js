import { read_local_storage_values } from "../../../Local_Storage/Local_Storage.js";
import { total_moves_h2_create } from "../../../js/variables.js";

let total_moves_h2;
export function total_moves_helper_function() {
	total_moves_h2 = document.createElement("h2");
	total_moves_h2_create(total_moves_h2);
	total_moves_h2.id = "total_moves_h2";
	read_local_storage_values("total_moves") ? total_moves_h2.innerText = `Moves:${read_local_storage_values("total_moves")}` : total_moves_h2.innerText = "Moves:0";
	document.body.append(total_moves_h2);
}

export function update_the_move_in_UI() {
	return total_moves_h2.innerText = `Moves:${read_local_storage_values("total_moves")}`;
}