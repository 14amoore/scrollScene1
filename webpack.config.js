const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // page1: `${__dirname}/src/page1.js`,
    // page2: `${__dirname}/src/page2.js`,
    // page3: `${__dirname}/src/page3.js`,
    // page4: `${__dirname}/src/page4.js`,
    // page5: `${__dirname}/src/page5.js`,
    // page6: `${__dirname}/src/page6.js`,
    // page7: `${__dirname}/src/page7.js`,
    // page8: `${__dirname}/src/page8.js`,
    // page9: `${__dirname}/src/page9.js`,
    page10: `${__dirname}/src/page10.js`,
    // gsapPg1: `${__dirname}/src/gsapPg1.js`,
    // gsapPg2: `${__dirname}/src/gsapPg2.js`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
};
