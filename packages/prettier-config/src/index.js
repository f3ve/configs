// import { type Config } from 'prettier';

/**
 * If not otherwise specified, the default value is being used.
 * @type {import("prettier").Config}
 * */
const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'lf',
  semi: true,

  /**
   * Set to true because it saves me a keystroke by not click `shift` to make
   * quotes in JS/TS.
   * */
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'all',
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
  requirePragma: false,
  rangeStart: 0,
  rangeEnd: Number.POSITIVE_INFINITY,
  quoteProps: 'as-needed',
  proseWrap: 'preserve',
  bracketSpacing: true,
  jsxSingleQuote: false,
  insertPragma: false,
  htmlWhitespaceSensitivity: 'css',
  experimentalTernaries: false,
  embeddedLanguageFormatting: 'auto',
};

module.exports = config;
