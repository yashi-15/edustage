ScrollReveal({
	distance: "40px",
	duration: 2000,
});

ScrollReveal().reveal("#banner, .head-1, .head-2, .navbar",{
		delay: 200,
		origin: "top",
});
ScrollReveal().reveal("#register-form", {
	delay: 200,
	origin: "right",
});
ScrollReveal().reveal(".left", {
	delay: 200,
	origin: "left",
});
ScrollReveal().reveal(".btns, .features-card, .courses-card, .trainers-card, .clients-card, #footer", {
	delay: 400,
	origin: "bottom",
});