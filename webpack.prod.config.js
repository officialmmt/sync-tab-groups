const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { cleanCode } = require('./scripts/remove-evals');

class CleanForAmoPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('CleanForAmoPlugin', compilation => {
      for (const basename in compilation.assets) {
        if (!basename.endsWith('.js')) continue;
        let source = compilation.assets[basename].source();
        if (typeof source !== 'string') source = source.toString();
        const cleaned = cleanCode(source);
        if (cleaned !== source) {
          compilation.assets[basename] = {
            source: () => cleaned,
            size: () => Buffer.byteLength(cleaned, 'utf8'),
          };
        }
      }
    });
  }
}

const plugins = [
  new webpack.DefinePlugin({
    'process.env.IS_PROD': true,
  }),
  new CopyWebpackPlugin([
    {
      from: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js',
      to: 'lib/browser-polyfill.js',
      context: '../',
      flatten: true,
      transform: function(content, path) {
        return content.toString().replace('//# sourceMappingURL=browser-polyfill.min.js.map', '')
      },
    },
  ]),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: cssnano,
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true,
  }),
  new CleanForAmoPlugin(),
];

module.exports = {
  output: {
    path: path.resolve(__dirname, './release/build'),
  },
  target: 'web',
  mode: 'production',
  plugins,
  // Prefer size and performance
  devtool: 'none',
};
