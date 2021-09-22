const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
    math: './src/math/index.ts',
    string: './src/string/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'hsj-test-utils',
      type: 'umd',
      export: 'default'
    },
    filename: (pathData) => {
      return pathData.chunk.name === 'index' ? '[name].js' : '[name]/index.js'
    }
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/],
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'chunk-vendors'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
