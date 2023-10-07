const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'html', 'dist'),
    filename: 'dist.global.js',
    library: 'A',
    libraryTarget: 'umd',
  },
};