const path = require('path');

module.exports = {
  entry: './src/index.js', // O arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public/assets/js'), // Onde os arquivos empacotados vão
    filename: 'bundle.js', // Nome do arquivo empacotado
  },
  mode: 'production', // Modo de produção (ou 'development' se estiver em desenvolvimento)
  module: {
    rules: [
      {
        test: /\.js$/, // Para arquivos JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa o Babel para transpilar o código
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
