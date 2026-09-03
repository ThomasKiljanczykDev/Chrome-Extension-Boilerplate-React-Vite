/** @typedef { import('prettier').Config } PrettierConfig */
/** @typedef { import('@ianvs/prettier-plugin-sort-imports').PluginConfig } SortImportsConfig */

/**
 * @type {PrettierConfig & SortImportsConfig}
 */
const prettierConfig = {
    plugins: ['@prettier/plugin-oxc', '@ianvs/prettier-plugin-sort-imports'],
    // Code style
    semi: true,
    tabWidth: 4,
    printWidth: 100,
    endOfLine: 'lf',
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: 'none',
    arrowParens: 'avoid',
    bracketSameLine: false,
    // Import sort ('' entries insert a blank line between groups)
    importOrder: [
        '^react$',
        '',
        '<BUILTIN_MODULES>',
        '^[A-z]',
        '',
        '^@[^/]',
        '',
        '^@/',
        '',
        '^\\../',
        '',
        '^\\./',
        '',
        '^.+\\.s?css$'
    ],
    importOrderCaseSensitive: true,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy']
};

export default prettierConfig;
