//-------- find the given 'value' parameter positions according to array -----------
export default function find_Positions_of_value(array, value) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			if (array[i][j] === value) return [i, j]; // [row, col]
		}}
	return null;
}
//----------------------------------------------------------------------------------
