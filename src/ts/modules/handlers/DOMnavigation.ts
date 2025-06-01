const DOMnavigation = (function () {
  const rootEl = document.documentElement as HTMLElement;

  const themeButtonEl = document.querySelector(
    '[data-color-theme]',
  ) as HTMLButtonElement;

  function switchColorThemeClickEventHandler(): void {
    const classArray: string[] = Array.from(rootEl.classList);

    const isLight: boolean = classArray.includes('light');

    if (isLight) {
      rootEl.classList.remove('light');
      rootEl.classList.add('dark');
    } else {
      rootEl.classList.remove('dark');
      rootEl.classList.add('light');
    }
  }

  const navigationEl = document.querySelector(
    '[data-navigation]',
  ) as HTMLElement;

  const openNavigationEl = document.querySelector(
    '[data-navigation-button]',
  ) as HTMLButtonElement;

  function openNavigationClickEventHandler(): void {
    const isMobile: boolean =
      navigationEl.getAttribute('data-state') === 'mobile';

    if (isMobile) {
      const openBtnClassArray: string[] = Array.from(
        openNavigationEl.classList,
      );
      const isOpen: boolean = openBtnClassArray.includes('open');

      if (isOpen) {
        rootEl.style.overflowY = 'auto';

        navigationEl.setAttribute('data-open', 'false');
        openNavigationEl.classList.remove('open');
        openNavigationEl.classList.add('close');
      } else {
        rootEl.style.overflowY = 'hidden';

        navigationEl.setAttribute('data-open', 'true');
        openNavigationEl.classList.remove('close');
        openNavigationEl.classList.add('open');
      }
    }
  }

  const navigationListEl = document.querySelector(
    '[data-nav-list]',
  ) as HTMLUListElement;

  function navigationLinksClickEventHandler(e: Event): void {
    const targetEl = e.target as HTMLElement;

    const targetElData: DOMStringMap = targetEl.dataset;

    const targetElDataArray: string[] = Object.keys(targetElData);

    const targetElDataAttr: string = targetElDataArray[0];

    if (targetElDataAttr === 'navListLink') {
      e.preventDefault();

      const targetElContent: string = String(
        targetEl.textContent,
      ).toLowerCase();

      const goToSectionEl = document.querySelector(
        `#${targetElContent}`,
      ) as HTMLElement;

      goToSectionEl.scrollIntoView(true);

      rootEl.style.overflowY = 'auto';

      navigationEl.setAttribute('data-open', 'false');
      openNavigationEl.classList.remove('open');
      openNavigationEl.classList.add('close');
    }
  }

  return {
    openNavigationEl,
    openNavigationClickEventHandler,
    themeButtonEl,
    switchColorThemeClickEventHandler,
    navigationListEl,
    navigationLinksClickEventHandler,
  };
})();

export { DOMnavigation };
