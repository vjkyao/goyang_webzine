/* =============================================
   Google Analytics 4 — G-V718RSR7K7
   측정 ID를 바꿀 일이 생기면 아래 한 줄만 수정
   ============================================= */
(function () {
  var GA_ID = 'G-V718RSR7K7';

  // gtag 스크립트를 <head>에 동적 삽입
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(gtagScript);

  // gtag 초기화
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();

/* =============================================
   공통 머릿글 HTML 삽입
   특집 이름 변경 시 아래 span 텍스트만 수정
   ============================================= */
(function () {
  var html = [
    '<header class="header">',
    '  <a href="index.html">',
    '    <img src="images/logo.png" alt="전국철도노동조합 로고" class="header-logo">',
    '    <h1>고양고속지부 웹진 <span>| 총파업특집</span></h1>',
    '  </a>',
    '</header>'
  ].join('\n');

  var s = document.currentScript;
  if (s) {
    s.insertAdjacentHTML('beforebegin', html);
  } else {
    document.write(html);
  }
})();
