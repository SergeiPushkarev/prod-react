import webpack from "webpack";
import { BuildOptions } from "config/buildConfig/types/config";
import { buildLoaders } from "./BuildLoaders";
import { buildPlagins } from "./BuildPlagins";
import { buildResolvers } from "./BuildResolvers";
import { buildDevServer } from "./BuildDevServer";

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean:true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlagins(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
};