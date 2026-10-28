
// =======================================
// MY:COLOR / SCRIPT
// =======================================

// スマホ

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#nav');

if (menuButton && nav) {

  menuButton.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    menuButton.setAttribute(
      'aria-expanded',
      String(open)
    );

    menuButton.setAttribute(
      'aria-label',
      open ? 'メニューを閉じる' : 'メニューを開く'
    );

  });

  nav.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      nav.classList.remove('open');

      menuButton.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}

// =======================================
// フッター年号
// =======================================

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// =======================================
// スクロールアニメーション
// =======================================

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible');

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });

  document.documentElement.classList.add('js-ready');

} else {

  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('is-visible');
  });

}

// =======================================
// 応募URL 未設定の際の表示
// =======================================

const applyButton = document.querySelector('#applyButton');

if (applyButton) {

  applyButton.addEventListener('click', (event) => {

    const href = applyButton.getAttribute('href');

    if (!href || href === '#entry') {

      event.preventDefault();

      alert('応募受付ページは現在準備中です。');

    }

  });

}
