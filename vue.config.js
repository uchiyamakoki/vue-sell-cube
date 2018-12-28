const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const rattings = appData.rattings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before (app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          date: seller
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          date: goods
        })
      })
      app.get('/api/rattings', function (req, res) {
        res.json({
          errno: 0,
          date: rattings
        })
      })
    }
  }
}
