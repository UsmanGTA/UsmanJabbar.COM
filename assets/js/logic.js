// Menu Animations
let menuBtn = document.getElementById('menu-btn-check');
let menuCon = document.getElementById('menu-container');
let naviBar = document.getElementById('navbar');
let menuBar = document.getElementsByClassName('line');

menuBtn.onclick = () => {
	if (menuBtn.checked) {
		menuCon.style.height = "100vh"
		naviBar.style.backgroundColor = "black"
		naviBar.style.color = "white"
		for (const bar of menuBar) {
			bar.style.backgroundColor = "white"
		}
	} else {
		menuCon.style.height = "4.5rem"
		naviBar.style.backgroundColor = "white"
		naviBar.style.color = "black"
		for (const bar of menuBar) {
			bar.style.backgroundColor = "black"
		}
	}
}

window.onscroll = function() {
	if (!menuBtn.checked) {
		if (this.oldScroll > this.scrollY) { naviBar.style.top = "0"; }
		else { naviBar.style.top = "-4.5rem"; }
		this.oldScroll = this.scrollY;
	}
}

let menuItems = document.querySelectorAll('#navbar ul > li > a')
for (const menuItem of menuItems) {
	menuItem.addEventListener('click', () => {
		menuBtn.checked = false;
		menuBtn.onclick()
	})
}

const animateLiText = (data) => {
	for (const title of data) {
		title.addEventListener('mouseenter', () => {
			const currentHoverElement = title;
			for (const item of data) {
				if (item != currentHoverElement) { item.style.opacity = "0.3"; }
			}
			title.style.transition = "0.25s all ease-in-out"
		})
		title.addEventListener('mouseleave', () => {
			for (const item of data) { item.style.opacity = "1"; }
		})
	}
}

let navMenuTitles = document.querySelectorAll('#navbar ul > li > a > h2');
let footerJumpTitles = document.querySelectorAll('#footer-pages ul > li > a > h2');
let footerSocialTitles = document.querySelectorAll('#footer-contact-links ul > li > a > h2');
animateLiText(footerSocialTitles);
animateLiText(footerJumpTitles);
animateLiText(navMenuTitles);