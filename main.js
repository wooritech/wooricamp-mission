
// 두번째 캐러셀
//첫번째 페이지 1.2초 안걸림

let list = document.querySelector('.slider .slides');
let items = document.querySelectorAll('.slider .slides .slide');
let dots = document.querySelectorAll('.slider .navigation-manual li');

// 시작번호
let active = 0;
// 아이템 수
let lengthItems = items.length - 1;
//2초마다 moveNextSlide 실행
let refreshSlider = setInterval(() => {
  moveNextSlide()
}, 2000);

//nextIndex의 값은 = nextActive? 아니라면 active는 0? 
function moveSlideTo(nextIndex) {
  active = nextIndex;

  //이미지 하나의 크기 * 인덱스 번호
  let checkLeft = items[active].offsetLeft;
  // 자동 슬라이드되는 크기
  list.style.left = '-' + checkLeft + 'px';
  
  let lastActiveDot = document.querySelector('.slider .navigation-manual li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');

  // if(active + 1 > lengthItems) {
  //   active = 0;
  // } else {
  //   active = active + 1;
  // }
}
//기존 if문 역할 계승 //moveSlideTo 실행
function moveNextSlide() {
  let nextActive = active + 1

  if(nextActive > lengthItems) {
    nextActive = 0
  }

  moveSlideTo(nextActive)
}

//필요한 코드인가?
function reloadSlider() {
  //이미지 하나의 크기 * 인덱스 번호
  let checkLeft = items[active].offsetLeft;
  // 자동 슬라이드되는 크기
  list.style.left = '-' + checkLeft + 'px';
  
  let lastActiveDot = document.querySelector('.slider .navigation-manual li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  // clearInterval(refreshSlider);
  // refreshSlider = setInterval(moveNextSlide, 500)
}
//딜레이 초기화 안됨
dots.forEach((li, key) => {
  li.addEventListener('click', function() {
    moveSlideTo(key)    
  })
})