const path  = require('path');

module.exports = {
  mode: 'development', // または 'production'
  //watchモード
  //watch: true,  //watch オプションを有効にする
  //srcまでのパス
  context: path.join(__dirname, "src"),
  //エントリーポイント src/index.js
  entry: `./index.js`,

  output: {
	//ビルドしたファイルの出力先デフォルトはdist
    path: path.join(__dirname, "dist"),
    //出力ファイル名
	filename: "main.js"
  },

  //ローダーなどのモジュールを設定するプロパティ
  module: {
	rules: [
	  {
		test: /\.(sass|scss|css)$/,
		use: [
		  "style-loader",
		  {
			loader: "css-loader",
			options: {
			  url: false,
			  sourceMap: true,
			}
		  },
		  "sass-loader",
		]
	  }
	]
  },
};