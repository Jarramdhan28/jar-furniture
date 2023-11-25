document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.menu_fajar');
    const navList = document.querySelector('.nav-list_fajar');

    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
