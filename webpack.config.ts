import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths } from 'config/buildConfig/types/config';
import { BuildWebpackConfig } from './config/buildConfig/BuildWebpackConfig';

export default (env:BuildEnv)=>{
    const paths: BuildPaths = {
        entry: path.resolve(__dirname,'source','index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname,'public','index.html'),
    
    }
    const mode= env.mode || "development"
    const PORT = env.port || 3030
    const isDev = mode === "development"

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config
};