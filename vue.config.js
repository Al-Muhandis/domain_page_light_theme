const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const minimist = require('minimist')

// Парсим аргументы командной строки
const args = minimist(process.argv.slice(2))

// Значение по умолчанию для publicPath
const defaultPublicPath = '/templates/sigma_light/'

// Получаем значение publicPath из аргументов командной строки или используем значение по умолчанию
const publicPath = args.publicpath || defaultPublicPath
const defaultLocale = args.defaultLocale || 'ru'

module.exports = defineConfig({
  publicPath: publicPath, // Используем значение из аргументов командной строки
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PUBLIC_PATH': JSON.stringify(publicPath), // Передаем publicPath в приложение
        'process.env.DEFAULT_LOCALE': JSON.stringify(defaultLocale),        
      }),
    ],
  },
})
