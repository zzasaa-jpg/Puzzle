let accessibility_value = false;

export function toggle_accessibility_value() {
	accessibility_value = !accessibility_value;
	return accessibility_value
}
export function get_accessibility_value() {
	return accessibility_value;
}

