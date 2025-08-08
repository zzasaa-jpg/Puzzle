import n_values_move_pattern from "../n_move_pattern_obj.js";
import find_Positions_of_value from "./find_positions_of_value.js";
import swap_elements from "./swap_elements_function.js";

//--------------- move the zero div box according array, index, values---------------
export default function move(array, value, index){
	const [zero_row, zero_col] = find_Positions_of_value(array, 0);
	if(find_Positions_of_value(array, value) == null) return;
	const [click_value_row, click_value_col ] = find_Positions_of_value(array, value);
	n_values_move_pattern(array)[index].forEach((ele)=>{
		if (ele === 0){
			swap_elements(array, zero_row, zero_col, click_value_row, click_value_col, index);
			return;
		}
		else return;
	});
}
//----------------------------------------------------------------------------------
