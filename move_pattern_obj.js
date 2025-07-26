export default function move_pattern(array){
	return {
		0: [array[1][0], array[0][1]],
		1: [array[0][0], array[1][1], array[0][2]],
		2: [array[0][1], array[1][2]],
		3: [array[2][0], array[1][1], array[0][0]],
		4: [array[2][1], array[1][0], array[0][1], array[1][2]],
		5: [array[0][2], array[1][1], array[2][2]],
		6: [array[2][1], array[1][0]],
		7: [array[2][2], array[1][1], array[2][0]],
		8: [array[2][1], array[1][2]],
	}
}
