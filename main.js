
// new Swiper('.carousel_main .carousel_wrapper', {
//     loop: true,
//     autoplay: {
//         delay: 3000
//     }
// }); swiper.js 라이브러리 없으면 작동 안함

const wrapper = document.querySelector('.carousel_wrapper');
const bullets = document.querySelectorAll('.carousel_circle');

let currentSlide = 0;//스타벅스에서는 isHidePromotion = false;를 사용했었다.

function showSlide(slideIndex) {
    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;//화면 넘어가는 크기 설정
    currentSlide = slideIndex;

    bullets.forEach((bullet, index) => { //배열 순회
        if (index === currentSlide) {
            bullet.classList.add('active');//숨김처리
        } else {
            bullet.classList.remove('active');//보임처리
        }
    });
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(0);

let timer = undefined;

function autoSlide() {
    if(timer == undefined) {
        timer = setInterval(function() {
            //자동으로 변할 값
   
        }, 3000);
    }
}
autoSlide();