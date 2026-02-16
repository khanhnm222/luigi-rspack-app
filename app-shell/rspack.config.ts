import * as path from 'path';
import type { Configuration } from '@rspack/cli';

const config: Configuration = {
  entry: './src/main.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    port: 3000,
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript'
              }
            }
          }
        }
      }
    ]
  }
};

export default config;
