const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const defaultPublicPath = '/templates/sigma_light/'

const publicPath = args.publicpath || defaultPublicPath
const defaultLocale = args.defaultLocale || 'ru'
const onlyForm = args.onlyform === 'true'

module.exports = defineConfig({
  publicPath: publicPath,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PUBLIC_PATH': JSON.stringify(publicPath), 
        'process.env.DEFAULT_LOCALE': JSON.stringify(defaultLocale),
        'process.env.ONLY_FORM': JSON.stringify(onlyForm),      
      }),
    ],
  },
})
