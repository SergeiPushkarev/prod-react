import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer({ port } :BuildOptions): DevServerConfiguration {
  return {
    open: true,
    port,
    compress: true,
    historyApiFallback: true,
    hot: true,
  }
}