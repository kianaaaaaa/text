module.exports = {
  lintOnSave: false,
  devServer: {
    port: '8080',
    proxy: {
      '/': {
        target: 'http://api.vikingship.xyz',
        ws: false,
        changeOrigin: true
      }
    }
  }
}
