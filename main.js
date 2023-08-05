const pre = document.querySelector("pre");

document.addEventListener("mousemove", e => {
	rotateElement(e, pre);
});

function rotateElement(event, element) {
	// mouse position
	const x = event.clientX;
	const y = event.clientY;

	// middle of inner
	const middleX = window.innerWidth / 2;
	const middleY = window.innerHeight / 2;

	// offset from middle
	const offsetX = ((x - middleX) / middleX) * 45;
	const offsetY = ((y - middleY) / middleY) * 45;

	element.style.setProperty("--rotateX", -1 * offsetY + "deg");
	element.style.setProperty("--rotateY", offsetX + "deg");
}
