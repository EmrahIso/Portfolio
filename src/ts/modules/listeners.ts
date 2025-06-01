import { renderStorage, updateStorage } from './storage';
import { DOMnavigation } from './handlers/DOMnavigation';
import { DOManimation } from './handlers/DOManimation';

// STORAGE

window.addEventListener('beforeunload', updateStorage);

document.addEventListener('DOMContentLoaded', renderStorage);

// NAVIGATION

// Open and close mobile navigation
DOMnavigation.openNavigationEl.addEventListener(
  'click',
  DOMnavigation.openNavigationClickEventHandler,
);

// Switch color theme
DOMnavigation.themeButtonEl.addEventListener(
  'click',
  DOMnavigation.switchColorThemeClickEventHandler,
);

DOMnavigation.navigationListEl.addEventListener(
  'click',
  DOMnavigation.navigationLinksClickEventHandler,
);

// ANIMATION

window.addEventListener('load', DOManimation.autoTypeAnimation);

window.addEventListener(
  'load',
  DOManimation.loadEventHandlerSingularElementAnimationObserver,
);

window.addEventListener(
  'scroll',
  DOManimation.scrollEventHandlerSingularElementAnimationObserver,
); // Create event throttling

window.addEventListener(
  'scroll',
  DOManimation.scrollEventHandlerGroupElementAnimationObserver,
);
