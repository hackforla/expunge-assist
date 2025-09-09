import '@testing-library/jest-dom/vitest';

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

vi.mock(import('react-i18next'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key) => key,
      i18n: { changeLanguage: vi.fn(), language: 'en' },
    }),
    Trans: ({ children, i18nKey }) => children || i18nKey || null,
  };
});
