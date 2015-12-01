module.exports = {
  entry: './main.js',
  output: {
    filename: './index.js'
  },
  devServer: {
    inline: true,
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
