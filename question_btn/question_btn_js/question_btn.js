import call_svg from "../../timer/timer_js/call_svg.js";
import { question_button_create } from "../../js/variables.js";
//--------------------------------creating variables------------------------------------------
let question_container_wrapper_, question_container_page_, head_, paragraph_, close_btn_, question_btn_, question_btn_info;
//--------------------------------------------------------------------------------------------
question_btn_info = false;
//---------------------------------close button-----------------------------------------------	
export default async function question_btn() {
	question_btn_ = document.createElement("button");
	question_button_create(question_btn_);
	question_btn_.id = "question_btn";
	question_btn_.innerHTML = await call_svg("../question_btn/SVG/help.svg");
	question_btn_.addEventListener("click", async function () {
		question_btn_info = !question_btn_info;
		if (question_btn_info) {
			question_container_page().prepend(head(), paragraph(), await close_btn());
			question_container_wrapper().append(question_container_page_);
			document.body.append(question_container_wrapper_);
		} else {
			question_container_wrapper_.remove();
		}
	});
	document.body.append(question_btn_);
	return question_btn_;
}
//--------------------------------------------------------------------------------------------

//----------------------------question container wrapper--------------------------------------
function question_container_wrapper() {
	question_container_wrapper_ = document.createElement("div");
	question_container_wrapper_.id = "question_container_wrapper";
	return question_container_wrapper_;
}
//--------------------------------------------------------------------------------------------

//-----------------------------question container page----------------------------------------
function question_container_page() {
	question_container_page_ = document.createElement("div");
	question_container_page_.id = "question_container_page";
	return question_container_page_;
}
//--------------------------------------------------------------------------------------------

//----------------------------------head (h1-tag)---------------------------------------------
function head() {
	head_ = document.createElement("h1");
	head_.id = "head";
	head_.innerText = "Heading";
	return head_;
}
//--------------------------------------------------------------------------------------------

//---------------------------------paragraph (p-tag)------------------------------------------
function paragraph() {
	paragraph_ = document.createElement("p");
	paragraph_.innerText = "paragraph";
	paragraph_.id = "paragraph_of_question_btn";
	return paragraph_;
}
//--------------------------------------------------------------------------------------------

//---------------------------------close button-----------------------------------------------	
async function close_btn() {
	close_btn_ = document.createElement("button");
	close_btn_.id = "close_btn";
	close_btn_.innerHTML = await call_svg("../question_btn/SVG/close.svg");
	close_btn_.addEventListener("click", function () {
		question_container_wrapper_.remove();
		question_btn_info = false;
	});
	return close_btn_;
}
//--------------------------------------------------------------------------------------------
