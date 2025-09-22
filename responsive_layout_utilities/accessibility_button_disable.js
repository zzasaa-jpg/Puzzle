import {accessibility_btn_read} from "../js/variables.js";

let x_point = window.matchMedia("(max-width: 750px)");

export default function accessibility_button_disable(x_point) {
	if (x_point.matches) {
		if (accessibility_btn_read()) accessibility_btn_read().disabled = true;
	} else {
		if (accessibility_btn_read()) accessibility_btn_read().disabled = false;
	}
}

accessibility_button_disable(x_point);

x_point.addEventListener("change", function () {
	accessibility_button_disable(x_point);
})
