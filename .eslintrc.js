module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },

  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended",
    "plugin:compat/recommended",
    "plugin:prettier/recommended",
  ],

  settings: {
    "import/extensions": [".js", ".ts", ".vue"],

    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
      "vue-eslint-parser": [".vue"],
    },

    "import/ignore": [/.js$/],
  },

  ignorePatterns: [
    "*.config.*",
    ".eslintrc.js",
    "src/proto.js",
    "src/proto.d.ts",
  ],

  rules: {
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-reflect-apply": "off",

    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/block-lang": ["error", { script: { lang: "ts" } }],
    "vue/component-name-in-template-casing": "error",
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/html-button-has-type": "error",
    "vue/no-static-inline-styles": "error",
    "vue/prefer-separate-static-class": "error",
    "vue/return-in-computed-property": "off",
    "vue/require-default-prop": "off",

    "import/first": "warn",
    "import/exports-last": "warn",
    "import/no-duplicates": "warn",
    "import/newline-after-import": "warn",
    "import/no-named-default": "warn",
    "import/extensions": [
      "warn",
      "always",
      {
        ts: "never",
      },
    ],
    "import/order": [
      "warn",
      {
        "newlines-between": "never",
        warnOnUnassignedImports: true,
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },

  overrides: [
    {
      files: ["*.vue", "*.spec.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
          },
        ],
      },
    },
    {
      files: ["*.vue", "*.ts", "*.tsx", "*.d.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        // eslint-disable-next-line unicorn/prefer-module
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      rules: {
        // https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        "no-undef": "off",
      },
    },
  ],
};
