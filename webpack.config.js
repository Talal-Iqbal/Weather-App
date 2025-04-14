const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode : "development", 
    entry: { 
        weather : './src/js/weather.js'
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader' ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
      devtool: "eval-source-map",
      plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            minify : false, 
            template : 'src/template.html',
        })
      ],
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean : true,
      },
}
