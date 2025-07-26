import move_pattern from "./move_pattern_obj.js";
import winning_array from "./winning_array.js";
import winning_value from "./winning_value.js";

let section = document.getElementById("section");
let div;
let arr = [];
let attributes_ = [];
let win_pattern_array = [];
let win_pattern_value = [];
push_random_value_in_win_pattern_array(win_pattern_array);
_array_splice(win_pattern_array, win_pattern_value);

//--------------------------- start from 8 index to zero ----------------------------
function start_(zero_value){
	let currentIndex = 0;
	for (let row = 0; row < 3; row++){
		for (let col = 0; col < 3; col++){
			div = document.createElement("div");
			div.classList.add("div")
			if(currentIndex == zero_value){
				div.setAttribute("data", 0)
				div.innerText = '';
			} else {
				div.setAttribute("data", 1);
				div.innerText = win_pattern_value[row][col];
			}
			attributes_.push(parseInt(div.attributes.data.value))
			section.appendChild(div);
			currentIndex++;
		}
	}
}
start_(8);
//-----------------------------------------------------------------------------------
//----------------------- render the boxes according the array ----------------------
function render_the_boxes(){
	_array_splice(attributes_, arr);
	console.log(arr);
	let div_ = document.querySelectorAll(".div");
	div_.forEach((ele, index) => {
	if (ele.getAttribute("data") == 0) ele.style.backgroundColor = "";
		ele.addEventListener("click", function(){
			console.log(win_pattern_value)
			//move(arr, 0, 1, index);
			move(win_pattern_value, parseInt(ele.innerText), 0, index)
			if(win_or_lose(win_pattern_value, winning_array())) {
				section.innerHTML = '';
				section.innerHTML =`<h1 class="win_info_h1">Game was won!!!</h1>`;
			}
			else console.log("")
		})
	})
}
render_the_boxes();
//-----------------------------------------------------------------------------------
//--------------- move the zero div box according array, index, values---------------
function move(array, value, new_value, index){
	const [sub_array, sub_element] = findZeroPosition(array);
	move_pattern(array)[index].forEach((ele)=>{
		if (ele === 0)swap_elements(array, value, new_value, sub_array, sub_element, index);
		else return;
	});
}
//----------------------------------------------------------------------------------
//------------------- find the zero position according the array -------------------
function findZeroPosition(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			if (array[i][j] === 0) return [i, j]; // [row, col]
		}}
	return null;
}
//----------------------------------------------------------------------------------
//------------------------random value function-------------------------------------
function random_value_arrange(max){
	return Math.floor(Math.random() * max)
}
//----------------------------------------------------------------------------------
//---------------- random value push inside of win-pattern-array -------------------
function push_random_value_in_win_pattern_array(win_pattern_array){
	while(win_pattern_array.length < 9){
		const random = winning_value()[random_value_arrange(9)];
		let exists = false;

		win_pattern_array.forEach((element, index)=>{
			if (element == random) exists = true;
		})

		if (!exists) win_pattern_array.push(random);
	}
	zero_push_to_end(win_pattern_array);
	return win_pattern_array;
}
//---------------------------------------------------------------------------------
//-------------------------splice the array in 2D array----------------------------
function _array_splice(default_array, spliceing_array){
	while (default_array.length){
		spliceing_array.push(default_array.splice(0, 3));
	}
}
//---------------------------------------------------------------------------------
//-----------random values pushed after than; zero value move to end---------------
function zero_push_to_end(array){
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
//-------------------------swap elements inside of array---------------------------
function swap_elements(array, value, new_value, sub_array, sub_element, index){
	for (let i = 0; i < array.length; i++){
		for (let j = 0; j < array[i].length; j++){
			if (array[i][j] === value){
				array[i][j] = new_value;
				array[sub_array][sub_element] = value;
			}
		}
	}
	arr = [];section.innerHTML = '';start_(index);render_the_boxes();
	return array;
}
//---------------------------------------------------------------------------------
//-------------------------checking win the game-----------------------------------
function win_or_lose(array1, array2){
	for (let i = 0; i < array1.length; i++){
		for (let j = 0; j < array1[i].length; j++){
			if(array1[i][j] !== array2[i][j]) return false;
		}
	}
	return true;
}
console.log(win_pattern_value, winning_array())
console.log(win_or_lose(win_pattern_value, winning_array()))
//---------------------------------------------------------------------------------
