// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'airbnb',
//     'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
//     'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2020,
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint', 'react-hooks'],
//   rules: {
//     'import/extensions': [
//       'error',
//       {
//         '.js': 'always',
//         '.jsx': 'always',
//         '.ts': 'always',
//         '.tsx': 'always',
//       },
//     ],
//     'import/no-unresolved': 'off',
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
//     'no-use-before-define': 'off',
//     'no-unused-vars': 'off',
//     'linebreak-style': 'off',
//     '@typescript-eslint/no-unused-vars': ['error'],
//     '@typescript-eslint/no-use-before-define': ['error'],
//     'no-tabs': ['error', { allowIndentationTabs: true }],
//   },
//   overrides: [
//     {
//       files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.test.tsx'],
//       env: {
//         jest: true,
//       },
//     },
//     {
//       files: ['*.ts', '*.tsx'],
//       rules: {
//         'no-undef': 'off',
//       },
//     },
//   ],
//   globals: {
//     JSX: true,
//   },
//   settings: {
//     react: {
//       version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
//     },
//   },
// };
module.exports = {
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'react-app/jest',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
