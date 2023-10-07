const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'html', 'dist'),
    filename: 'dist-esm.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};
