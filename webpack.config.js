const path = require('path');

module.exports = {
  mode:'production',
  // TS 执行入口文件
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryExport: "default",
    library: "myTest",
    libraryTarget: "commonjs"
  },
  resolve: {
    // 先尝试 ts，tsx 后缀的 TypeScript 源码文件
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  devtool: 'source-map',// 输出 SourceMap 方便在浏览器里调试 TS 代码
};
