import Typed from 'typed.js';

const DOManimation = (function () {
  function autoTypeAnimation(): void {
    const typed = new Typed('#auto-typed', {
      strings: ['a Web Developer.', 'a Web Designer.', 'a Problem Solver.'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });
  }

  const allScrollAnimatedElements: HTMLElement[] = Array.from(
    document.querySelectorAll('[data-animated]'),
  );

  function scrollEventHandlerSingularElementAnimationObserver(e: Event): void {
    allScrollAnimatedElements.forEach((animatedEl: HTMLElement) => {
      const screenPos: number = window.innerHeight;
      const elTopPos: number = animatedEl.getBoundingClientRect().top;

      if (elTopPos < screenPos) {
        startAnimation(animatedEl, 'fadeInLeft');
      }
    });
  }

  const allScrollGroupAnimatedElements: HTMLElement[] = Array.from(
    document.querySelectorAll('[data-animated-group]'),
  );

  function scrollEventHandlerGroupElementAnimationObserver(e: Event): void {
    allScrollGroupAnimatedElements.forEach((groupEl: HTMLElement) => {
      let isCalled: string = String(
        groupEl.getAttribute('data-group-animation-finished'),
      );

      const screenPos: number = window.innerHeight;
      const elTopPos: number = groupEl.getBoundingClientRect().top;

      if (elTopPos < screenPos) {
        const groupElItemEls: HTMLElement[] = Array.from(
          groupEl.querySelectorAll(':scope > *'),
        );

        if (isCalled === 'false') {
          startAnimationDelay(groupElItemEls);
          groupEl.setAttribute('data-group-animation-finished', 'true');
        }
      }
    });
  }

  const allLoadAnimatedElements: HTMLElement[] = Array.from(
    document.querySelectorAll('[data-load-animated]'),
  );

  function loadEventHandlerSingularElementAnimationObserver(e: Event): void {
    allLoadAnimatedElements.forEach((animatedEl: HTMLElement) => {
      const screenPos: number = window.innerHeight;
      const elTopPos: number = animatedEl.getBoundingClientRect().top;
      const animationType: string = String(
        animatedEl.getAttribute('data-load-animated'),
      );

      let animationName: string =
        animationType === 'left' ? 'fadeInLeft' : 'fadeInRight';

      if (elTopPos < screenPos) {
        startAnimation(animatedEl, animationName);
      }
    });
  }

  function startAnimation(element: HTMLElement, animationName: string): void {
    element.style.animation = `${animationName} 500ms ease-in 1`;
  }

  function startAnimationDelay(elements: HTMLElement[]): void {
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
    });

    let delay: number = 0;

    elements.forEach((el, index) => {
      switch (index) {
        case 0:
          delay = 100;
          break;
        case 1:
          delay = 200;
          break;
        case 2:
          delay = 300;
          break;
        case 3:
          delay = 400;
          break;
        case 4:
          delay = 500;
          break;
        case 5:
          delay = 600;
          break;
        case 6:
          delay = 700;
          break;
        case 7:
          delay = 800;
          break;
        case 8:
          delay = 900;
          break;
        case 9:
          delay = 1000;
          break;
      }

      let timeout = setTimeout(() => {
        el.style.transition = 'all .5s';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });
  }

  return {
    autoTypeAnimation,
    scrollEventHandlerSingularElementAnimationObserver,
    loadEventHandlerSingularElementAnimationObserver,
    scrollEventHandlerGroupElementAnimationObserver,
  };
})();

export { DOManimation };
