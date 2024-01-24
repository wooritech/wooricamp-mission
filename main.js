
// new Swiper('.carousel_main .carousel_wrapper', {
//     loop: true,
//     autoplay: {
//         delay: 3000
//     }
// }); swiper.js 라이브러리 없으면 작동 안함

const slide = document.querySelector('.carousel_wrapper');
const bullets = document.querySelectorAll('.carousel_circle');

let currentSlide = 0;//스타벅스에서는 isHidePromotion = false;를 사용했었다.

function showSlide(slideIndex) {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;//화면 넘어가는 크기 설정
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

let slideWidth = slide.clientWidth;//슬라이드 크기 구하기 //clientWidth 요소의 가로값 가져오기
let slideItems = document.querySelectorAll(".carousel_slide");// 값 변경을 위한 슬라이드 전체 선택
const maxSlide = slideItems.length;//최대값이 보유한 슬라이드 수를 넘기지 않도록

let currSlide = 1;//버튼 클릭시 현재 슬라이드 위치 나타내기

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 슬라이드 앞뒤로 각각 마지막, 첫번쨰 슬라이드 붙여주기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".carousel_slide");
//
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});


// 앞뒤 범위를 초과하지 않게 만들기
function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
       i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

//루프, 딜레이
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);