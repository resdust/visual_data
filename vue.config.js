module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lyq-visual/' : '/',
  devServer: {
    proxy: {
      '/getAreaData': {
        target: 'http://xxxx',
        // pathRewrite: {'^/api':''}
      },
    },
  },
}
