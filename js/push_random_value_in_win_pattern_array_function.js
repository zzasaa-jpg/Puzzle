import {read_local_storage_values} from "../Local_Storage/Local_Storage.js"; 
import winning_value from "../winning_value.js";
import {
	win_pattern_array_read,
} from "./variables.js";
import random_value_arrange from "./random_value_arrange.js";
import puzzle_length_according_local_storage_value from "./puzzle_length_according_local_storage_value.js";

//---------------- random value push inside of win-pattern-array -------------------
export default function push_random_value_in_win_pattern_array(win_pattern_array) {
	while (win_pattern_array_read().length < puzzle_length_according_local_storage_value(read_local_storage_values("game_level"),[9,25,49])) {
		const random = winning_value()[read_local_storage_values("game_level")][read_local_storage_values("select_game_values")][random_value_arrange(puzzle_length_according_local_storage_value(read_local_storage_values("game_level"),[9,25,49]))];
		let exists = false;

		win_pattern_array_read().forEach((element, index) => {
			if (element == random) exists = true;
		})

		if (!exists) win_pattern_array_read().push(random);
	}
	//zero_push_to_end(win_pattern_array_read());
	return win_pattern_array_read();

}
//---------------------------------------------------------------------------------

