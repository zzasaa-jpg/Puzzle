//-----------random values pushed after than; zero value move to end---------------
export default function zero_push_to_end(array){
	let zero_index_position = find_zero_zero_index_position(array);
	let zero = array.splice(zero_index_position, 1);
	array.push(zero[0]);
	return array;
}
function find_zero_zero_index_position(array){
	let index_value = null;
	array.forEach((element, index)=>{
		if (element == 0) index_value = index;
	});
	if(index_value == index_value)return index_value;
	else return console.warn("ARRAY inside doesn't have ZERO digit!");
}
//---------------------------------------------------------------------------------
