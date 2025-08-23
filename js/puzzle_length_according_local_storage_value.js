//------------ puzzle length according local storage value get for puzzle grid size i.e-> '3x3','5x5'------------
export default function puzzle_length_according_local_storage_value(length, wanted_values_array){
	if (length == "1")return wanted_values_array[0];
	else if (length == "2") return wanted_values_array[1];
	else return wanted_values_array[2];
}
//---------------------------------------------------------------------------------------------------------------
