//-------------------------splice the array in 2D array----------------------------
export default function _array_splice(default_array, spliceing_array){
	while (default_array.length){
		spliceing_array.push(default_array.splice(0, 3));
	}
}
//---------------------------------------------------------------------------------
