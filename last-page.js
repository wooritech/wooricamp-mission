function menu2() {
  const x = document.getElementById("select1");
  const y = document.getElementById("select2");
  const disp = document.getElementById("result");
  disp.innerHTML = "가장 맛았는 강아지 사료("+x.value+')['+y.value+"]"
};


sum = 0;

let x = document.getElementById("select1");
let select1 = x.Option[s.selectedIndex].value;
let y = document.getElementById("select2");
let select2 = y.Option[s.selectedIndex].value;

if (select1=월요일) {
  sum += 50;
} else if (select1=화요일) {
  sum += 60;
} else if(select1=수요일) {
  sum += 70; 
};

if (select2=소고기) {
  sum += 1000;
  } else if (select2=닭고기) {
    sum += 2000;
  } else if(select2=연어) {
    sum += 3000;
}

for (let i = 0; i < 10;) {
  innerHTML += '<li>셀렉트 선택으로 제품 추가하면 선택한 제품 정보 나옴<li>'
}

// 정상 작동
function btn() {
  i = sum;
  if(i > 0) {
    alert(i+'입니다')
  }else if (i = 0){
    alert('상품을 선택해주세요')
  };
}