const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const path = require('path');
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
const WebpackBar = require('webpackbar');
const resolve = (dir) => path.join(__dirname, '.', dir);

// https://juejin.cn/post/6886698055685373965#heading-1
// https://github.com/staven630/vue-cli4-config

module.exports = {
  // 默认'/'，部署应用包时的基本 URL
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : '/',
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: "assets", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require('os').cpus().length > 1,

  devServer: {
    port: 9999,
    host: '0.0.0.0',
    https: false,
    open: true,
  },

  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        prependData: `
        @import "@/styles/variables.scss";
        @import "@/styles/mixins.scss";
        @import "@/styles/function.scss";
        $src: "${process.env.VUE_APP_OSS_SRC}";
        `,
      },
      // vant 样式修改 https://vant-contrib.gitee.io/vant/#/zh-CN/theme
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 'nav-bar-height:': '50px',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true;@import "${path.resolve(__dirname, './src/styles/cover_vant.less')}";`,
          },
        },
      },
    },
  },

  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true);

    // 添加别名
    config.resolve.alias.set('@', resolve('src')).set('#', resolve('types'));

    if (IS_PROD) {
      // 压缩图片
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
          // webp: { quality: 75 }
        });
    }

    config.module
      .rule('images')
      .use('url-loader')
      .tap(() => ({
        name: './assets/images/[name].[ext]',
        quality: 85,
        limit: 0,
        esModule: false,
      }));

    config.module
      .rule('svg')
      .test(/\.svg$/)
      .include.add(resolve('src/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader');

    config.plugin('define').tap((args) => [
      {
        ...args,
        'window.isDefine': JSON.stringify(true),
      },
    ]);

    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('./js/[name].[chunkhash:8].js');
      config.output.chunkFilename('./js/[name].[chunkhash:8].js');

      config.plugin('extract-css').tap(() => [
        {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        },
      ]);
      config.plugin('hotHash').use(HotHashWebpackPlugin, [{ version: '1.0.0' }]);
      config.plugin('webpackBar').use(WebpackBar);

      config.optimization
        .minimize(true)
        .minimizer('terser')
        .tap((args) => {
          let { terserOptions } = args[0];
          terserOptions.compress.drop_console = true;
          terserOptions.compress.drop_debugger = true;
          return args;
        });

      config.optimization.splitChunks({
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'all',
            minSize: 1,
            minChunks: 2,
            priority: 1,
          },
          vendor: {
            name: 'chunk-libs',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
          },
        },
      });
    }
  },
};
