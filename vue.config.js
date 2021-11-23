module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lyq-visual/'
    : '/'
		,
	devServer : {
		proxy: {
			'/getAreaData' : {
				target: 'http://47.99.79.38:10074',
				// pathRewrite: {'^/api':''}
			}
		}
	}
}
