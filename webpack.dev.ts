import { merge } from 'webpack-merge';
import common from './webpack.common';
import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

type DevConfig = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const config: DevConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: ['./src/template.html'],
    open: true,
  },
};

export default merge<DevConfig>(common, config);
