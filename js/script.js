let resizeBtn = document.querySelector('.brands .brands__buttton-arrow');
let resizeBlock = document.querySelector('.brands .brands__slider');


resizeBtn.addEventListener('click', function () {
    if (resizeBlock.classList.contains('brands__slider--active')) {
        resizeRemoveClass();
    } else {
        resizeAddClass();
    }

});



let mySwiper = null;

window.addEventListener('resize', function () {
    let widthEl = document.documentElement.clientWidth;
    if (widthEl < 760) {
        if (mySwiper == null) {
            swiperOn();
        }
    } else {
        if (mySwiper !== null) {
            mySwiper.destroy(true, true);
            mySwiper = null;
            resizeAddClass();
            // let elem = document.querySelector('.swiper-pagination').children;
            // for (let i = elem.length - 1; i >= 0; i--) {
            //     console.log(i);
            //     elem[i].remove();
            // }

        }
    }
});


function resizeAddClass() {
    resizeBlock.classList.add('brands__slider--active');
    resizeBtn.classList.add('brands__buttton-arrow--active');
    resizeBtn.textContent = "Показать все";
}

function resizeRemoveClass() {
    resizeBlock.classList.remove('brands__slider--active');
    resizeBtn.classList.remove('brands__buttton-arrow--active');
    resizeBtn.textContent = "Скрыть";
}

function swiperOn() {
    if (resizeBlock.classList.contains('brands__slider--active')) {
        resizeRemoveClass();
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