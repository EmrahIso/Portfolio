// If we are in development mode I don't want localStorage

if (process.env.NODE_ENV !== 'production') {
  console.log('----------------------');
  localStorage.clear();
  console.log('Cleared localStorage');
  console.log('----------------------');
}

function updateStorage(): void {
  const rootEl = document.documentElement as HTMLElement;

  type allowedThemes = 'light' | 'dark';

  const rootElClassListArray: string[] = Array.from(rootEl.classList);

  if (
    rootElClassListArray[0] === 'light' ||
    rootElClassListArray[0] === 'dark'
  ) {
    const currentValue: allowedThemes = rootElClassListArray[0];

    localStorage.setItem('--portfolio-theme', currentValue);
  }
}

function renderStorage(): void {
  const rootEl = document.documentElement as HTMLElement;

  const newValue: string | null = localStorage.getItem('--portfolio-theme');

  if (typeof newValue === 'string') {
    if (newValue === 'light') {
      rootEl.classList.remove('dark');
      rootEl.classList.add(newValue);
    } else if (newValue === 'dark') {
      rootEl.classList.remove('light');
      rootEl.classList.add(newValue);
    }
  }
}

export { updateStorage, renderStorage };
