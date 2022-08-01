module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.scss$": "jest-css-modules-transform",
  },
};
