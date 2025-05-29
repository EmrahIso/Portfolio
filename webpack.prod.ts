import { merge } from 'webpack-merge';
import common from './webpack.common.ts';
import type { Configuration } from 'webpack';

const prodConfig: Configuration = {
  mode: 'production',
  devtool: 'source-map',
};

export default merge(common, prodConfig);
