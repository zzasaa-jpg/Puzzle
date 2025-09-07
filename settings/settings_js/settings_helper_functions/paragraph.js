//--------------------paragraph function-------------------------------
export default function paragraph(paragraph_text) {
	let paragraph_ = document.createElement("p");
	paragraph_.id = "paragraph";
	paragraph_.innerText = paragraph_text;
	return paragraph_;
}
//---------------------------------------------------------------------