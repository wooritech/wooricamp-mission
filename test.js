function displayPrice() {
  var selectBox1 = document.getElementById("product-select-1");
  var selectedValue1 = selectBox1.value;

  var selectBox2 = document.getElementById("product-select-2");
  var selectedValue2 = selectBox2.value;

  var priceDisplay = document.getElementById("price-display");
  var resetBtn = document.getElementById("reset-btn");

  if (selectedValue1 != "0" && selectedValue2 != "0") {
    var price = getPrice(selectedValue1, selectedValue2);
    priceDisplay.textContent = "가장 맛있는 강아지 사료 ("+selectedValue1+')['+selectedValue2+']'+ price;
    resetBtn.style.display = "inline"; // 선택이 완료된 경우 Reset 버튼 보이기
  } else {
    priceDisplay.textContent = "";
    resetBtn.style.display = "none"; // 선택이 초기화된 경우 Reset 버튼 숨기기
  }
}

function getPrice(productId1, productId2) {
  var total = 0;
  switch (productId1) {
    case "월요일":
      total += 50;
      break;
    case "화요일":
      total += 60;
      break;
    case "수요일":
      total += 70;
      break;
  }

  switch (productId2) {
    case "소고기":
      total += 1000;
      break;
    case "닭고기":
      total += 2000;
      break;
    case "연어":
      total += 3000;
      break;
  }

  return total;
}

function resetSelections() {
  var selectBox1 = document.getElementById("product-select-1");
  var selectBox2 = document.getElementById("product-select-2");

  var selectedValue1 = selectBox1.value;
  var selectedValue2 = selectBox2.value;

  selectBox1.selectedIndex = 0;
  selectBox2.selectedIndex = 0;

  if (selectedValue1 != "0" && selectedValue2 != "0") {
    displayPrice(); // 선택이 초기화된 후에도 가격을 유지하고 다시 계산하여 표시
  }
}