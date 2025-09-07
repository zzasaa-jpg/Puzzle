export default function call_svg(path) {
	return fetch(path)
		.then(res => res.text())
		.then(svg_string => {
			return svg_string;
		})
		.catch(err => console.error(err))
}