import start_ from "./start_function.js";
import render_the_boxes from "./render_the_boxes_function.js";
import {section_read} from "./variables.js";

//-------------------------swap elements inside of array---------------------------
export default function swap_elements(array, zero_row, zero_col, click_value_row, click_value_col, index){
	let temp  = array[zero_row][zero_col];// Zero value store in temp variable.
	/* The move is 'Zero'. i.g.-> Left move means 'Zero' value move to left.
	   also Right move means 'Zero' value move to right. same to Move Up,Down.*/
	// Checking if the move is horizontal same or no
	if(zero_row == click_value_row){
		if(click_value_col < zero_col){
			// Left Move
			for (let i = zero_col; i > click_value_col; i--){
				array[zero_row][i] = array[zero_row][i-1]
			}
			array[zero_row][click_value_col] = temp;
		}
		else {
			//Right Move
			for (let i = zero_col; i < click_value_col; i++){
				array[zero_row][i] = array[zero_row][i+1]
			}
			array[zero_row][click_value_col] = temp
		}
	}
	//checking if the move is vertical same or no
	else if(zero_col === click_value_col) {
		if( click_value_row < zero_row){
			//Up Move
			for (let i = zero_row; i > click_value_row; i--){
				array[i][zero_col] = array[i-1][zero_col]
			}
			array[click_value_row][zero_col] = temp;
		}
		else{
			//Down Move
			for (let i = zero_row; i < click_value_row; i++){
				array[i][zero_col] = array[i+1][zero_col]
			}
			array[click_value_row][zero_col] = temp;

		}
	}
	section_read().innerHTML = ''; start_(index); render_the_boxes();
	return array;
}
//---------------------------------------------------------------------------------
