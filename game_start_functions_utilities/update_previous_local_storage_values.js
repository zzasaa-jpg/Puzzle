import updated_obj from "../Local_Storage/updated_obj.js";
import { update_local_storage_values } from "../Local_Storage/local_storage.js";

export default function update_previous_local_storage_values(update_values, update_keys) {
	let previous_obj = JSON.parse(localStorage.getItem("obj"));
	for (const [key, value] of Object.entries(previous_obj)) {
		updated_obj[key] = value;
		for (let j = 0; j < update_keys.length; j++){
			if (update_keys[j].includes(key)) {
				updated_obj[key] = update_values[j];
			}
		}
	}
	update_local_storage_values();
}
//The function takes two parameters. if update_keys array includes the key then take that key 'updated_obj[key]' = replace that key's value from 'updated_values[j]'
