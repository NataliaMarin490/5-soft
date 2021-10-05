let $menu = document.querySelector(".menu");
let $menuItems = document.querySelectorAll(".menu_item");
var $mediaqueryList_1 = window.matchMedia("(max-width: 1000px)");

if($mediaqueryList_1.matches){
    $menu.style.top = -$menu.clientHeight + "px";
}


const btn_menu = document.querySelector('.btn_menu');
const btn_pizza = document.querySelector('.btn_pizza');
const btn_login = document.querySelector('.btn_login');
const menu = document.querySelector('.menu')
const pizza = document.querySelector('.pizza_list')
const login = document.querySelector('.login')

addEventListener('DOMContentLoaded', () => {
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            menu.classList.toggle('menu--show');
            pizza.classList.remove('pizza_list--show');
            login.classList.remove('login--show');
            /*Toogle agrega o quita la clase*/
        })
    }
});
addEventListener('DOMContentLoaded', () => {
    if (btn_pizza) {
        btn_pizza.addEventListener('click', () => {
            pizza.classList.toggle('pizza_list--show');
            menu.classList.remove('menu--show');
            login.classList.remove('login--show');
            /*Toogle agrega o quita la clase*/
        })
    }
});
addEventListener('DOMContentLoaded', () => {
    if (btn_login) {
        btn_login.addEventListener('click', () => {
            login.classList.toggle('login--show');
            pizza.classList.remove('pizza_list--show');
            menu.classList.remove('menu--show');
            /*Toogle agrega o quita la clase*/
        })
    }
});

