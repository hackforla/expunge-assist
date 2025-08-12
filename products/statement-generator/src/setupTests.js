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

jest.mock('react-i18next', () => {
  const actual = jest.requireActual('react-i18next');
  return {
    ...actual,
    useTranslation: () => ({
      t: (key) => key,
      i18n: { changeLanguage: jest.fn(), language: 'en' },
    }),
    Trans: ({ children, i18nKey }) => children || i18nKey || null,
  };
});
