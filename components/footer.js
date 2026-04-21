(function () {
  var html = [
    '<footer class="footer">',
    '  <h3>전국철도노동조합 고양고속차량지부</h3>',
    '  <a href="https://naver.me/GQSaxtyC" target="_blank" rel="noopener">',
    '    <p>© 2025 전국철도노동조합 고양고속차량지부 all rights reserved &nbsp;&nbsp;|&nbsp;&nbsp; 발행인: 김숭식</p>',
    '    <p style="margin-top:0.5rem; font-size:0.875rem; opacity:0.8;">독자의 투고를 기다립니다.</p>',
    '  </a>',
    '</footer>'
  ].join('\n');

  var s = document.currentScript;
  if (s) {
    s.insertAdjacentHTML('beforebegin', html);
  } else {
    document.write(html);
  }
})();
