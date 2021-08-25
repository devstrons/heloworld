/* eslint-env node */
/*
 *  ESLint run control for hello-world project.
 *  Created On 25 August 2021
 */

module.exports = {
    env: {
        es2021: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier', 'simple-import-sort'],
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
    },
}
