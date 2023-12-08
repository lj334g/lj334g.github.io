document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarMenu = document.querySelector('#navbarNavDropdown');

    navbarToggler.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');
    });
});