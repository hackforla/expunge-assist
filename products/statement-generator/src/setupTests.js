import '@testing-library/jest-dom';

// Override console.warn to suppress specific warnings
const originalWarn = console.warn; // eslint-disable-line no-console
// eslint-disable-next-line no-console
console.warn = (...args) => {
  if (
    !args[0].includes(
      '[JSS] Rule is not linked. Missing sheet option "link: true".'
    )
  ) {
    originalWarn(...args);
  }
};
