document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById('burger')
    const headerNav = document.getElementById('header-nav')

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        headerNav.classList.toggle('open');
    })

    window.addEventListener("resize", function () {
        burger.classList.remove('active');
        headerNav.classList.remove('open');
    })

})