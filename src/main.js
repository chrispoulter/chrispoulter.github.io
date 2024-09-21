var navBar = document.getElementById('navBar');
var navButton = document.getElementById('navButton');
var navLinks = document.getElementById('navLinks');

navButton.onclick = function () {
    navLinks.classList.toggle('show');
};

function clickOutsideNavBar(event) {
    const isOutsideClick = !navBar.contains(event.target);

    if (isOutsideClick) {
        navLinks.classList.remove('show');
    }
}

document.addEventListener('click', clickOutsideNavBar);
