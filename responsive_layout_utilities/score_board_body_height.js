import {read_local_storage_values} from "../../Local_Storage/Local_Storage.js";

let x_point = window.matchMedia("(max-width: 750px)");

export default function score_board_body_height(x_point) {
	if (x_point.matches) {
		if(localStorage.getItem("obj")){
			if (read_local_storage_values("play") == false) document.getElementsByTagName("body")[0].style.height = "auto";
		}
	} else {
		document.getElementsByTagName("body")[0].style.height = "90svh";
	}
}

score_board_body_height(x_point);

x_point.addEventListener("change", function () {
	score_board_body_height(x_point);
})
