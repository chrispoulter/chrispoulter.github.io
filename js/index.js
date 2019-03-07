const menu = document.getElementById('menu');
const toggler = document.getElementById('toggler');

toggler.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('collapsed');
});

window.addEventListener('click', function() {
    menu.classList.add('collapsed');
});
