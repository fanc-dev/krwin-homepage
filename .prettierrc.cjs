module.exports = {
  // Basic formatting
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',

  // JSX formatting
  jsxSingleQuote: false,

  // Trailing commas
  trailingComma: 'all',

  // Brackets and spacing
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  // Line endings
  endOfLine: 'lf',

  // File-specific overrides
  overrides: [
    {
      files: '*.{json,md,yml,yaml}',
      options: {
        singleQuote: false,
      },
    },
  ],
};
