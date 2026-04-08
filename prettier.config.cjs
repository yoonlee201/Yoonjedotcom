/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
    bracketSpacing: true,
    endOfLine: 'lf',
    insertPragma: false,
    singleAttributePerLine: true,
    bracketSameLine: true,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    embeddedLanguageFormatting: 'auto',
    vueIndentScriptAndStyle: false,
};

module.exports = config;