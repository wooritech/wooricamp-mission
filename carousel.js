슬라이드 길이 = 이미지 크기 * 이미지 개수;
setInterval, setTimeout 통일

// 한번에 이동하는 범위 = 이미지 하나 크기;
let list = document.querySelector('슬라이드 전체 class')
let items = document.querySelectorAll('슬라이드 각각의 아이템 class')
let dots = document.querySelectorAll('네비게이션 버튼 li')
let active = 0;
let lengthItems = items.length;

function carousel() {
  if(active > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
}

new carousel() = setInterval (() => {carousel}, 6000);


캐러셀1 setInterval 3000; 슬라이드 시간 0.8s
캐러셀2 setInterval 6000; 슬라이드 시간 1.2s

