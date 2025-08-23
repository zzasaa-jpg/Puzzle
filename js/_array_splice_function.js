import puzzle_length_according_local_storage_value from "./puzzle_length_according_local_storage_value.js";
import {read_local_storage_values} from "../Local_Storage/Local_Storage.js";
//-------------------------splice the array in 2D array----------------------------
export default function _array_splice(default_array, spliceing_array){
	while (default_array.length){
		spliceing_array.push(default_array.splice(0, puzzle_length_according_local_storage_value(read_local_storage_values("game_level"),[3,5,7])));
	}
}
//---------------------------------------------------------------------------------
