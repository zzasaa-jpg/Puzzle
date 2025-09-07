import { div___create, div___read } from "../../../js/variables.js";
//----------------------create div function---------------------------
export default function create_div_function() {
	div___create(document.createElement("div"));
	div___read().id = "div__";
	div___read().style.display = "flex";
	div___read().style.justifyContent = "space-between";
	div___read().style.alignItems = "center";
	div___read().style.margin = "10px 0";
	return div___read();
}
//--------------------------------------------------------------------
