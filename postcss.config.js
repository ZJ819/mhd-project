module.exports = {
  plugins: {
    autoprefixer: {
      // 不需要设置这个选项，它会自动去使用 .browserslistrc 这个文件的配置项
      // browsers: ['Andreid >= 1.0', 'iOS >= 8']
      // 这里会有一个小问题 antoprefixer 最近新更新了10.X系列版本，需要降级成9.X系列
    },
    'postcss-pxtorem': {
      // 转换的基准值 1rem = 37.5px
      // x rem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
