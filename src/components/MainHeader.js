class MainHeader extends HTMLElement {
  // 엘리먼트 생성 시 생성자 호출됨
  constructor() {
    super();
  }

  // 엘리먼트가 DOM에 추가되면 connectedCallback 호출됨
  connectedCallback() {
    this.innerHTML = `
<header class="border-bottom pt-md">
  <div class="margin-align container pt-md pb-xl">
    <div class="flex-container align-center">
      <a href="#" class="logo h3">🐈 우리펫푸드</a>
      <span class="grow"></span>
      <div class="flex-container gap-lg">
        <a href="#" class="link-button fs-md">로그인</a>
        <a href="#" class="link-button fs-md">회원가입</a>
      </div>
    </div>
    
    <div class="flex-container">
      <div class="menu-button menu-button-left"><a href="#">강아지</a></div>
      <div class="menu-button menu-button-left"><a href="#">고양이</a></div>
      <span class="grow"></span>
      <div class="menu-button menu-button-right"><a href="#">마이페이지</a></div>
      <div class="menu-button menu-button-right"><a href="#">장바구니</a></div>
    </div>
  </div>
</header>`;
  }
  // 반대로 엘리먼트가 DOM에서 제거되면 disconnectedCallback 호출됨
  disconnectedCallback() {
    console.log("disconnected", this);
  }
}

if ("customElements" in window) {
  customElements.define("main-header", MainHeader);
}
