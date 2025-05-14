const rootEl = document.documentElement as HTMLElement;

const bodyEl = rootEl.querySelector('body') as HTMLBodyElement;

const themeButtonEl = document.querySelector(
  '[data-color-theme]',
) as HTMLButtonElement;

function switchColorThemeClickEventHandler() {
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

themeButtonEl.addEventListener('click', switchColorThemeClickEventHandler);

const navigationEl = document.querySelector('[data-navigation]') as HTMLElement;

const openNavigationEl = document.querySelector(
  '[data-navigation-button]',
) as HTMLButtonElement;

function openNavigationClickEventHandler() {
  const isMobile: boolean =
    navigationEl.getAttribute('data-state') === 'mobile';

  if (isMobile) {
    const openBtnClassArray: string[] = Array.from(openNavigationEl.classList);
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

openNavigationEl.addEventListener('click', openNavigationClickEventHandler);
