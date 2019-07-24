module.exports = {
  appType: 'microapp',
  microAppName: '',
  // 页面配置
  modules: {
    index: {
      route: '/index',
    },
    sample: {
      route: '/sample',
    },
  },
  webpack: {
    // 主题配置
    themes: {},
    // 是否开启chunk分析
    analyze: false,
    // 自定义构建配置、config为全局的构建配置
    config(webpackConfig) {
      return webpackConfig;
    },
  },
};