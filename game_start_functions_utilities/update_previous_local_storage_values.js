import updated_obj from "../Local_Storage/updated_obj.js";
import { update_local_storage_values } from "../Local_Storage/Local_Storage.js";
import { live_update } from "../js/variables.js";

export default function update_previous_local_storage_values(update_values, update_keys) {
	try {
		let previous_obj = JSON.parse(localStorage.getItem("obj"));
		for (let key in updated_obj) {
			delete updated_obj[key];
		}

		Object.assign(updated_obj, previous_obj);

		for (let j = 0; j < update_keys.length; j++) {
			let path = update_keys[j];
			let update = update_values[j];
			let target = updated_obj;

			for (let i = 0; i < path.length - 1; i++) {
				target = target[path[i]];
			}

			let lastKey = path[path.length - 1];

			if (typeof update === "object" && update !== null) {
				target[lastKey] = {
					...target[lastKey],
					...update
				}
			} else {
				target[lastKey] = update;
			}
		}
		update_local_storage_values();
	} catch (err) {
		live_update(false);
		console.error(err);
	}
}
