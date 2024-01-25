
// new Swiper('.carousel_main .carousel_wrapper', {
//     loop: true,
//     autoplay: {
//         delay: 3000
//     }
// }); swiper.js 라이브러리 없으면 작동 안함

const slide = document.querySelector('.carousel_wrapper');
let slideWidth = slide.clientWidth;//슬라이드 크기 구하기 //clientWidth 요소의 가로값 가져오기
let slideItems = document.querySelectorAll(".carousel_slide");// 값 변경을 위한 슬라이드 전체 선택
const maxSlide = slideItems.length;//최대값이 보유한 슬라이드 수를 넘기지 않도록
let currSlide = 1;//버튼 클릭시 현재 슬라이드 위치 나타내기

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

// 무한 슬라이드
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

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});


// 앞뒤 범위를 초과하지 않게 만들기
function nextMove() {
  currSlide++; //슬라이드 번호 1 상승
  if (currSlide <= maxSlide) { //불린 데이터 반환
    const offset = slideWidth * currSlide; //슬라이드 크기 * tmffkdlem qjsgh
    slideItems.forEach((i) => {//슬라이드 전체 크기많큼 반복 순회 
      i.setAttribute("style", `left: ${-offset}px`);
    });//setAttribute('속성이름','속성값') 속성이름에 속성값 할당
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
    setTimeout(() => {//setTimeout 특정시간 지난 후 코드 실행 함수
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);//딜레이 0
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

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

//루프, 딜레이
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);