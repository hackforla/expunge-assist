import '@testing-library/jest-dom';

// Override console.warn to suppress specific warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    !args[0].includes(
      '[JSS] Rule is not linked. Missing sheet option "link: true".'
    )
  ) {
    originalWarn(...args);
  }
};
