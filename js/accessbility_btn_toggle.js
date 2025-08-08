import {toggle_accessbility_value, get_accessbility_value} from "../accessbility_state.js";
import {accessbility_btn_read, divs_read, index_read, index_create} from "./variables.js";

//------------------------accessbility_btn_toggle_functionality-----------------------
export default function accessbility_btn_toggle(){
	accessbility_btn_read().addEventListener("click", function(){
		let active = toggle_accessbility_value()
		console.log(get_accessbility_value())

		if (active){
			//Turn ON
			index_create(0)
			divs_read()[index_read()].style.borderColor= "red";
			for (let i=0; i< divs_read().length; i++){
				divs_read()[i].classList.add("no_click");
			}
		}
		else {
			//Turn OFF
			divs_read()[index_read()].style.borderColor= "white";
			for (let i=0; i< divs_read().length; i++){
				divs_read()[i].classList.remove("no_click");
			}
			index_create(0)
		}
	});
}
//-----------------------------------------------------------------------------------
