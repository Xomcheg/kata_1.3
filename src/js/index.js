
import style from '../scss/style.scss';
import Swiper from '../../node_modules/swiper/swiper-bundle.min.js';


let resizeBtns = document.querySelectorAll('.slider-sample__button');
let resizeBlocks = document.querySelectorAll('.slider-sample__inner');

for (let i = 0; i < resizeBtns.length; i++) {
    let item = resizeBtns[i];
    resizeFunction(item, i);
}
function resizeFunction(item, i){
    let number = i;
    item.addEventListener('click', function(){
        if (resizeBlocks[i].classList.contains('slider-sample--active')) {
            resizeRemoveClass(number);
        } else {
            resizeAddClass(number);
        }
    });
}

// resizeBtn.addEventListener('click', function () {
//     if (resizeBlock.classList.contains('slider-sample--active')) {
//         resizeRemoveClass();
//     } else {
//         resizeAddClass();
//     }
// });

let mySwiper = null;

function resizeAddClass(number) {
    resizeBlocks[number].classList.add('slider-sample--active');
    resizeBtns[number].classList.add('slider-sample__button--active');
    resizeBtns[number].textContent = "Показать все";
}

function resizeRemoveClass(number) {
    resizeBlocks[number].classList.remove('slider-sample--active');
    resizeBtns[number].classList.remove('slider-sample__button--active');
    resizeBtns[number].textContent = "Скрыть";
}


function swiperOn() {
    if (resizeBlocks[0].classList.contains('slider-sample--active')) {
        for (let i = 0; i < resizeBlocks.length; i++) {
            resizeBlocks[i].classList.remove('slider-sample--active');
            resizeBtns[i].classList.remove('slider-sample__button--active');
        }
    }
    mySwiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 1.3,
        spaceBetween: 16,
        slidesPerView: 'auto'
    });
}

function swiperCheck() {
    if (document.documentElement.clientWidth < 760) {
        swiperOn();
    }
}

swiperCheck();



let menu = document.querySelector('.sidebar');
let menuOverlay = document.querySelector('.sidebar__overlay');
let menuBtn = document.querySelector('.header .menu__btn');
let menuBtnClose = document.querySelector('.sidebar__header-btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('sidebar--active');
   
});
menuBtnClose.addEventListener('click', function(){
    menu.classList.remove('sidebar--active');
    
});
menuOverlay.addEventListener('click', function(){
    menu.classList.remove('sidebar--active');
    
});



let phoneBtns = document.querySelectorAll('.actions__btn-phone');
let phoneBlock = document.querySelector('.fidback-phone');
let phoneBtnClose = document.querySelector('.fidback__btn-close-phone');
let phoneOverlay = document.querySelector('.fidback__overlay-phone');
for(let i = 0; i < phoneBtns.length; i++){
    phoneBtns[i].addEventListener('click', function(){
        phoneBlock.classList.add('fidback--active');
    });
}
phoneBtnClose.addEventListener('click', function() {
    phoneBlock.classList.remove('fidback--active');
});
phoneOverlay.addEventListener('click', function() {
    phoneBlock.classList.remove('fidback--active');
});




let messageBtns = document.querySelectorAll('.actions__btn-message');
let messageBlock = document.querySelector('.fidback-message');
let messageBtnClose = document.querySelector('.fidback__btn-close-message');
let messageOverlay = document.querySelector('.fidback__overlay-message');
for(let i = 0; i < messageBtns.length; i++){
    messageBtns[i].addEventListener('click', function(){
        messageBlock.classList.add('fidback--active');
    });
}
messageBtnClose.addEventListener('click', function() {
    messageBlock.classList.remove('fidback--active');
});
messageOverlay.addEventListener('click', function() {
    messageBlock.classList.remove('fidback--active');
});



// window.addEventListener('resize', function () {
//     let widthEl = document.documentElement.clientWidth;
//     if (widthEl < 760) {
//         if (mySwiper == null) {
//             swiperOn();
//         }
//     } else {
//         if (mySwiper !== null) {
//             mySwiper.destroy(true, true);
//             mySwiper = null;
//             resizeAddClass();



//             // let elem = document.querySelector('.swiper-pagination').children;
//             // for (let i = elem.length - 1; i >= 0; i--) {
//             //     console.log(i);
//             //     elem[i].remove();
//             // }

//         }
//     }
// });