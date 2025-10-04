import updated_obj from "../Local_Storage/updated_obj.js";
import { update_local_storage_values } from "../Local_Storage/Local_Storage.js";
import { live_update } from "../js/variables.js";

export default function update_previous_local_storage_values(update_values, update_keys) {
	try {
		let previous_obj = JSON.parse(localStorage.getItem("obj"));
		for (const [key, value] of Object.entries(previous_obj)) {
			updated_obj[key] = value;
			for (let j = 0; j < update_keys.length; j++) {
				if (update_keys[j].includes(key)) {
					updated_obj[key] = update_values[j];
				}
			}
		}
		update_local_storage_values();
	} catch (err) {
		live_update(false);
		console.error(err);
	}
}
//The function takes two parameters. if update_keys array includes the key then take that key 'updated_obj[key]' = replace that keys's value from 'update_values[j]'
