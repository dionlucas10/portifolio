(function () {
  document.addEventListener('click', function (e) {

    const targetElement = e.target as HTMLElement;
    const anchor = targetElement.closest('a[href^="#"]');

    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    if (!href.startsWith('#')) return;

    e.preventDefault();

    if (href === '#' || href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    const header = document.querySelector('header') as HTMLElement | null;

    const headerOffset =
      header && getComputedStyle(header).position === 'fixed'
        ? header.offsetHeight
        : 0;

    const extraGap = 10;

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset -
      extraGap;

    window.scrollTo({
      top: Math.max(y, 0),
      behavior: 'smooth'
    });

    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });

  });
})();