const webpack = require('webpack');

module.exports = {
  outputDir: 'dist', 
  publicPath: '/', 
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  },
};
