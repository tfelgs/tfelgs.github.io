window.addEventListener("scroll", () => {
	var reveals = document.querySelectorAll(".reveal");
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 80;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
});

let toggle1 = (button) => {
	let element = document.getElementById("aptoImages");
	let hidden = element.getAttribute("hidden");

	if (hidden) {
		element.removeAttribute("hidden");
		button.innerText = "Show less";
	} else {
		element.setAttribute("hidden", "hidden");
		button.innerText = "Learn More";
	}
};
let toggle2 = (button) => {
	let element = document.getElementById("gmsImages");
	let hidden = element.getAttribute("hidden");

	if (hidden) {
		element.removeAttribute("hidden");
		button.innerText = "Show less";
	} else {
		element.setAttribute("hidden", "hidden");
		button.innerText = "Learn More";
	}
};
let toggle3 = (button) => {
	let element = document.getElementById("moveImages");
	let hidden = element.getAttribute("hidden");

	if (hidden) {
		element.removeAttribute("hidden");
		button.innerText = "Show less";
	} else {
		element.setAttribute("hidden", "hidden");
		button.innerText = "Learn More";
	}
};
