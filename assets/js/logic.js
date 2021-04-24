window.onscroll = function(e) {
	let navbar = document.getElementById('navbar');

	if (this.oldScroll > this.scrollY) {
		navbar.style.top = "0";
	} else {
		navbar.style.top = "-4.5rem";
	}

	this.oldScroll = this.scrollY;
}