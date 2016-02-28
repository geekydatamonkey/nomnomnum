// eslintrc
module.exports = {
  extends: 'airbnb',
  rules: {
    'no-unused-vars': [2, {
      args: 'after-used',
      argsIgnorePattern: '[Ii]gnore[d]?',
    }],
    'react/prefer-es6-class': 0,
  },
  plugins: [
    'react',
  ],
};
