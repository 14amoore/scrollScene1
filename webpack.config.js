const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    page1: `${__dirname}/src/page1.js`,
    page2: `${__dirname}/src/page2.js`,
    page3: `${__dirname}/src/page3.js`,
    page4: `${__dirname}/src/page4.js`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
};
