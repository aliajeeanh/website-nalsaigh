function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


const hamburger = document.querySelector('#check');
const logoPic = document.querySelector('#logoPic');

hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
        logoPic.style.display = 'none';
    } else {
        logoPic.style.display = 'grid';
    }
});




