let accessbility_btn = document.getElementById("accessbility_btn");
import {toggle_accessbility_value, get_accessbility_value} from "./accessbility_state.js"
let divs =  document.getElementsByClassName("div")
let index = 0;
import accessbility_index_obj from "./accessbility_index_obj.js";
let obj = accessbility_index_obj();

document.addEventListener("keydown", function (event){
	if (!get_accessbility_value()) return;
	divs[index].style.borderColor = "white"
	let e = event.key; 
	if(["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e)){
		let next = obj[index][e]
		if (next != null && divs[next])
		{
			index = next
		}
		divs[index].style.borderColor = "red";

	}else divs[index].style.borderColor = "red";
if (e === "Enter") {
	        let value = parseInt(divs[index].innerText);
	        move(win_pattern_value, value, index);

	        if (win_or_lose(win_pattern_value, winning_array())) {
			            section.innerHTML = `<h1 class="win_info_h1">Game was won!!!</h1>`;
			        }
	    }
})

accessbility_btn.addEventListener("click", function(){
	let active = toggle_accessbility_value()
	console.log(get_accessbility_value())

	if (active){
		//Turn ON
		index = 0
		divs[index].style.borderColor= "red";
		for (let i=0; i< divs.length; i++){
			divs[i].style.pointerEvents= "none";
		}
	}
	else {
		//Turn OFF
		divs[index].style.borderColor= "white";
		for (let i=0; i< divs.length; i++){
			divs[i].style.pointerEvents= "auto";
		}
		index = 0
	}
});











