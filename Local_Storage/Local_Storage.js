import obj from "./obj.js";
import updated_obj from "./updated_obj.js";
//----------------------write local storage values-------------------------
export function write_local_storage_values() {
	if (localStorage.getItem("obj")) return;
	else localStorage.setItem("obj", JSON.stringify(obj));
	return 1;
}
//-------------------------------------------------------------------------

//---------------------update local storage values-------------------------
export function update_local_storage_values() {
	localStorage.setItem("obj", JSON.stringify(updated_obj));
	return;
}
//-------------------------------------------------------------------------

//---------------------read local storage values---------------------------
export function read_local_storage_values(value) {
	return JSON.parse(localStorage.getItem("obj"))[value];
}
//-------------------------------------------------------------------------
