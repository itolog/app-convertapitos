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
        "react/prop-types": "off",
        "import/named": "off",
        "import/no-unresolved": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "import/no-named-as-default-member": "off",
        "react/self-closing-comp": [
            "warn",
            {
                "component": true,
                "html": true
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "vars": "local",
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "React"
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
        "no-duplicate-imports": "off"
    },
}
