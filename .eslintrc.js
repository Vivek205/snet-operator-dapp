module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'react-app'
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {},
    // "eslint.validate": [
    //     "javascript",
    //     "javascriptreact",
    //     { "language": "typescript", "autoFix": true },
    //     { "language": "typescriptreact", "autoFix": true }
    // ]
};