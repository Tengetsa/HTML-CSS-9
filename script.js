const menuActive = document.querySelector('.menu-active'); // Находим меню
const burger = document.querySelector('.btn1_heder'); // Находим кнопку бургера
const menuClose =document.querySelector('.menu-close'); // Находим кнопку крестика

function toggleMenu() {
    menuActive.classList.toggle('hidden_menu'); // Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .menu-active
}

burger.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция
menuClose.addEventListener('click', toggleMenu); // 