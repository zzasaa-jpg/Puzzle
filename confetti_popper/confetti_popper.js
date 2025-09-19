import { audio_tag_2_create } from "../js/variables.js";
let audio_tag2 = document.createElement("audio");//single autio tags creating.
audio_tag_2_create(audio_tag2);
//---------------------confetti_function--------------------------
export function confetti_function() {
	confetti_items(80, 60, 55, { x: 0, y: 1 });//From left
	confetti_items(80, 120, 55, { x: 1, y: 1 });//From right
	confetti_items(100, 90, 70, { x: 0.5, y: 1 });//From bottom center
}
//---------------------------------------------------------------
//-----------------confetti_items--------------------------------
function confetti_items(particleCount, angle, spread, origin) {
	confetti({ particleCount, angle, spread, origin });
}
//---------------------------------------------------------------
//---------------------creating audio tag------------------------
export function create_audio_tag(tag, src) {
	let source = document.createElement("source");
	source.src = src;
	source.type = "audio/mp3";
	tag.controls = true;
	tag.muted = false;
	tag.append(source);
	tag.style.display = "none";
	document.body.prepend(tag);
}
//---------------------------------------------------------------
//-calling the create audio tag for 'audio_tag1' & 'audio_tag2'.-
create_audio_tag(audio_tag2, "./confetti_popper/popper.mp3");
//---------------------------------------------------------------
//-------------------fire_audio----------------------------------
export function fire_audio() {
	audio_tag2.currentTime = 0;
	audio_tag2.play();
}
//---------------------------------------------------------------
