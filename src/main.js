var navBar = document.getElementById('navBar');
var navButton = document.getElementById('navButton');
var navLinks = document.getElementById('navLinks');

navButton.onclick = function () {
    navLinks.classList.toggle('hidden');
};

function clickOutsideNavBar(event) {
    const isOutsideClick = !navBar.contains(event.target);
    if (isOutsideClick) {
        navLinks.classList.add('hidden');
    }
}

document.addEventListener('click', clickOutsideNavBar);
