import { merge } from 'webpack-merge';
import common from './webpack.common.ts';
import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import path from 'path';

type DevConfig = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const config: DevConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), 'public'),
      publicPath: '/',
    },
    watchFiles: ['./src/template.html'],
    compress: true,
    port: 8080,
    open: true,
  },
};

export default merge<DevConfig>(common, config);
