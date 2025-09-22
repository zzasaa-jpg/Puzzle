import call_svg from "./call_svg.js";
import { read_local_storage_values } from "../../Local_Storage/Local_Storage.js";
import {
	timer_div_create, live_create, live_read, live_update,
	seconds_create, minutes_create,
	seconds_read, minutes_read,
	seconds_update, minutes_update,
	clear_interval_create, divs_read,
	accessibility_btn_read, restart_button_read,
	new_game_button_read, clear_interval_read,
} from "../../js/variables.js";
import update_previous_local_storage_values from "../../game_start_functions_utilities/update_previous_local_storage_values.js"
import { update_accessibility_value } from "../../accessibility_state.js";
import accessibility_button_disable from "../../responsive_layout_utilities/accessibility_button_disable.js";
//-----------------------------------timer variables--------------------------------------
let seconds, minutes, live, timer_div_, play_pause_button_, timer_div_minutes_, timer_minutes_h1_, ratio_h1_, timer_div_seconds_, timer_seconds_h1_;
//----------------------------------------------------------------------------------------
//-----------------------------some variables initial value-------------------------------
seconds = 0;
minutes = 0;
seconds_create(seconds);
minutes_create(minutes);
live = true;
live_create(live);//live move to global variable
//----------------------------------------------------------------------------------------
//-------------------------------export add timer function--------------------------------
export default async function add_timer() {
	document.body.prepend(timer_div());
	timer_div_create(timer_div_);//timer_div_ move to global variable
	const btn = await play_pause_button();//Wait for the button to finish loading SVG
	timer_div_.append(btn, timer_div_minutes(), ratio_h1(), timer_div_seconds());
	timer_div_minutes_.append(timer_minutes_h1());
	timer_div_seconds_.append(timer_seconds_h1());
	//------------------------call the function each seconds------------------------------
	if (read_local_storage_values("play")) {//Local storage value 'play' is true than setInterval run else nothing.
		if (clear_interval_read()) {
			clearInterval(clear_interval_read());
			clear_interval_create(null);
		}
		let interval = setInterval(() => {
			if (live_read()) {
				const timer_obj = timer(seconds_read(), minutes_read());//obj of timer function
				minutes_update(timer_obj.minutes);//updated value from timer function
				seconds_update(timer_obj.seconds);//updates value from timer function
				//Adding the zero for UI
				/*Here the local storage values is The entire object of 'time' is updating; the keys are not updating.*/
				let update_local_storage_time = Adding_zero(timer_seconds, timer_obj, "seconds");
				Adding_zero(timer_minutes, timer_obj, "minutes");
				update_previous_local_storage_values([update_local_storage_time], [["time"]]);
			}
			else return;
		}, 1000);
		clear_interval_create(interval);
	}
	//------------------------------------------------------------------------------------
}
//----------------------------------------------------------------------------------------
//-------------------------------------timer div------------------------------------------
function timer_div() {
	timer_div_ = document.createElement("div");
	timer_div_.id = "timer_div";
	return timer_div_;
}
//----------------------------------------------------------------------------------------
//---------------------------------play pause button--------------------------------------
async function play_pause_button() {
	play_pause_button_ = document.createElement("button");
	play_pause_button_.id = "btn";
	play_pause_button_.innerHTML = await call_svg("../timer/svg/pause-outline.svg");
	//----------------------toggle for pause or play timer--------------------------------
	play_pause_button_.addEventListener("click", async function () {
		live = !live; live_update(live);
		pointers_none_while_timer_pause();
		if (live == false) play_pause_button_.innerHTML = await call_svg("../timer/svg/play-outline.svg");
		else play_pause_button_.innerHTML = await call_svg("../timer/svg/pause-outline.svg");
	});
	//------------------------------------------------------------------------------------
	return play_pause_button_;
}
//----------------------------------------------------------------------------------------
//-------------------------------timer div for minutes h1---------------------------------
function timer_div_minutes() {
	timer_div_minutes_ = document.createElement("div");
	timer_div_minutes_.id = "timer_div_minutes";
	return timer_div_minutes_;
}
//----------------------------------------------------------------------------------------
//--------------------------------timer minutes h1 tag------------------------------------
function timer_minutes_h1() {
	timer_minutes_h1_ = document.createElement("h1");
	timer_minutes_h1_.id = "timer_minutes";
	timer_minutes_h1_.innerText = "00";
	return timer_minutes_h1_;
}
//----------------------------------------------------------------------------------------
//-----------------------------------ratio h1 tag-----------------------------------------
function ratio_h1() {
	ratio_h1_ = document.createElement("h1");
	ratio_h1_.id = "ratio";
	ratio_h1_.innerText = ":";
	return ratio_h1_;
}
//----------------------------------------------------------------------------------------
//-------------------------------timer div for seconds h1---------------------------------
function timer_div_seconds() {
	timer_div_seconds_ = document.createElement("div");
	timer_div_seconds_.id = "timer_div_seconds";
	return timer_div_seconds_;
}
//----------------------------------------------------------------------------------------
//---------------------------------timer seconds h1 tag-----------------------------------
function timer_seconds_h1() {
	timer_seconds_h1_ = document.createElement("h1");
	timer_seconds_h1_.id = "timer_seconds";
	timer_seconds_h1_.innerText = "00";
	return timer_seconds_h1_;
}
//----------------------------------------------------------------------------------------
//-----------------updating the values of seconds and minutes-----------------------------
function timer(seconds, minutes) {
	if (seconds == 59) {
		minutes = minutes + 1;
		seconds = 0;
	} else {
		seconds = seconds + 1;
	}
	return { seconds, minutes };
}
//----------------------------------------------------------------------------------------
//-----------------------------Adding zero for UI-----------------------------------------
function Adding_zero(element, timer_obj, type) {
	const seconds = timer_obj.seconds < 10 ? `0${timer_obj.seconds}` : timer_obj.seconds;//seconds
	const minutes = timer_obj.minutes < 10 ? `0${timer_obj.minutes}` : timer_obj.minutes;//minutes
	if (type == "seconds") element.innerHTML = seconds;
	else element.innerHTML = minutes;
	return { minutes, seconds };
}
//----------------------------------------------------------------------------------------
//--------------------pointers none function while timer pause----------------------------
function pointers_none_while_timer_pause() {
	if (live_read() == false) {
		accessibility_btn_read().disabled = true;
		restart_button_read().disabled = true;
		new_game_button_read().disabled = true;
		if (read_local_storage_values("accessibility_value")) update_accessibility_value(false);
		for (let i = 0; i < divs_read().length; i++) {
			divs_read()[i].classList.add("no_click1");
		}
	}
	else {
		accessibility_button_disable(window.matchMedia("(max-width: 750px)"));
		restart_button_read().disabled = false;
		new_game_button_read().disabled = false;
		if (read_local_storage_values("accessibility_value")) update_accessibility_value(true);
		for (let i = 0; i < divs_read().length; i++) {
			divs_read()[i].classList.remove("no_click1");
		}
	}
}
//----------------------------------------------------------------------------------------
