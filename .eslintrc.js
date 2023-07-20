module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "ignorePatterns": ["src/**/*.test.ts", "dist", "*.config.js",  ".eslintrc.js"],
    "rules": {
        "sort-keys": [
            0
        ],
        "no-undef": [
            2
        ],
        "no-unused-vars": [
            2,
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        "react/prop-types": 2,
        "react/no-multi-comp": [
            2,
            {
                "ignoreStateless": false
            }
        ],
        "react/no-deprecated": [
            2
        ],
        "react/no-access-state-in-setstate": [
            2
        ],
        "react/no-did-mount-set-state": [
            2
        ],
        "react/no-typos": [
            2
        ],
        "react/sort-prop-types": [
            0
        ],
        "react/jsx-sort-props": [
            2
        ],
        "react/jsx-no-bind": [
            2
        ],
        "react/jsx-uses-react": [
            0
        ],
        "react/react-in-jsx-scope": [
            0
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}