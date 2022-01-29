const path = require('path');
const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  // Run ESLint on changes to JavaScript/TypeScript files
  'src/**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  // Run type-check on changes to TypeScript files
  'src/**/*.ts?(x)': filenames =>
    `tsc-files --pretty --noEmit ${filenames.join(' ')}`,
  // Prettify on changes to JavaScript/TypeScript files
  'src/**/*.(ts|js)?(x)': filenames =>
    `yarn prettier --write . ${filenames.join(' ')}`,
};
