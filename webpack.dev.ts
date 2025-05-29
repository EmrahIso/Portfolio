import { merge } from 'webpack-merge';
import common from './webpack.common.ts';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfig } from 'webpack-dev-server';

interface WebpackDevConfig extends Configuration {
  devServer?: DevServerConfig;
}

const devConfig: WebpackDevConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: ['./src/template.html'],
    open: true,
  },
};

export default merge(common, devConfig);
