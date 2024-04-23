
 document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');

    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        this.classList.toggle('is-active'); // Добавим визуальный эффект для самой кнопки бургера
    });
});




