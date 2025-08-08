import winning_value from "../winning_value.js";
import {
	win_pattern_array_read,
} from "./variables.js";
import random_value_arrange from "./random_value_arrange.js";
import zero_push_to_end from "./zero_push_to_end_function.js";

//---------------- random value push inside of win-pattern-array -------------------
export default function push_random_value_in_win_pattern_array(win_pattern_array){
	while(win_pattern_array_read().length < 9){
		const random = winning_value()[random_value_arrange(9)];
		let exists = false;

		win_pattern_array_read().forEach((element, index)=>{
			if (element == random) exists = true;
		})

		if (!exists) win_pattern_array_read().push(random);
	}
	zero_push_to_end(win_pattern_array_read());
	return win_pattern_array_read();
}
//---------------------------------------------------------------------------------
