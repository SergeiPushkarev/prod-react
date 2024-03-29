import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import { buildCssLoaders } from "../buildConfig/loaders/buildCssLoaders";
import { BuildPaths } from "../buildConfig/types/config";

export default ({config}: {config: webpack.Configuration}) =>{
  const paths: BuildPaths = {
    build:'',
    entry:'',
    html:'',
    src: path.resolve(__dirname, "..", "..", "source")
  }
  config.resolve!.modules = [paths.src,'node_modules'];
  config.resolve!.extensions!.push('.ts', ".tsx");
  //@ts-ignore
  config.module.rules = config.module.rules.map((rule?: RuleSetRule) => {
    if (/svg/.test(rule?.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(
    buildCssLoaders(true)
  )
  config.plugins?.push( new DefinePlugin({__IS_DEV__:true, __API__:JSON.stringify('')}))
  return config;
}