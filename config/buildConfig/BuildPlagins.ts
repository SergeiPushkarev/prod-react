import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlagins ({paths,isDev,apiUrl}:BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.html,
      title: 'ProductionOnReact',
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    })
  ]
  if (isDev) {return [
    ...plugins, 
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(), 
    new BundleAnalyzerPlugin({
      openAnalyzer:false,
    })
  ]
  } else return plugins
}