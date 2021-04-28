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

let menuItems = document.querySelectorAll('#navbar a')
for (const menuItem of menuItems) {
	menuItem.addEventListener('click', () => {
		menuBtn.checked = false;
		menuBtn.onclick()
	})
}