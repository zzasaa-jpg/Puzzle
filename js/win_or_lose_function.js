//-------------------------checking win the game-----------------------------------
export default function win_or_lose(array1, array2){
	for (let i = 0; i < array1.length; i++){
		for (let j = 0; j < array1[i].length; j++){
			if(array1[i][j] !== array2[i][j]) return false;
		}
	}
	return true;
}
//---------------------------------------------------------------------------------
