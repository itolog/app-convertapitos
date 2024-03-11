module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        "plugin:oxlint/recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "eslint-config-prettier"
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
        "import/resolver": {
            "node": {
                "paths": [
                    "src"
                ],
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        "import/no-unresolved": "off",
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true,
                "argsIgnorePattern": "^_"
            }
        ],
        "react/react-in-jsx-scope": "off",
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": "warn",
        "quotes": [
            "warn",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "no-useless-escape": "warn",
        "no-return-assign": "off",
        "no-inner-declarations": "warn",
        "require-yield": "warn",
        "spaced-comment": "error",
        "no-duplicate-imports": "error"
    },
}
