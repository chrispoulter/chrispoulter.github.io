var navBar = document.getElementById('navBar');
var navLinks = document.getElementById('navLinks');

function toggleNavLinks() {
    navLinks.classList.toggle('show');
}

function clickOutsideNavBar() {
    const isOutsideClick = !navBar.contains(event.target);

    if (isOutsideClick) {
        navLinks.classList.remove('show');
    }
}

document.addEventListener('click', clickOutsideNavBar);
