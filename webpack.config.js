const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  mode: 'development',
  entry: {
    index : './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback : true,
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
      'vuex': 'vuex/dist/vuex.esm-bundler',
      '@': path.join(__dirname, 'src'),
      // 'img': path.join(__dirname, 'src/media'),
    }
  },
  module: {
    rules: [
        {
            test: /\.(s[ac]ss|css)$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
                // {
                //   loader : 'sass-loader',
                //   options: {
                //     includePaths: ['./node_modules']
                //   }
                // }
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      name: './../[path][name].[ext]',
                      // publicPath: './../media/img',
                      outputPath: './../media'
                    } 
                
                },
            ],
        },
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },

        {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        // 配置 HTML 模板路徑與生成名稱 (第三步)
        template: './dist/index.html',
        filename: './../index.html',
      }),
      
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new WebpackPwaManifest({
      publicPath : './work',
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous,
      start_url: "/pwa",
      icons: [
        {
          src: path.resolve('src/media/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes,
          destination: path.join('./../src/media', 'assets')
        },
        {
          src: path.resolve('src/media/assets/icon.png'),
          destination: path.join('./../src/media', 'assets'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/media/assets/icon.png'),
          destination: path.join('./../src/media', 'assets'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    })
  ]
};
module.exports = {
  mode: 'production',
  entry: {
    index : './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback : true,
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
      'vuex': 'vuex/dist/vuex.esm-bundler',
      '@': path.join(__dirname, 'src'),
      // 'img': path.join(__dirname, 'src/media'),
    }
  },
  module: {
    rules: [
        {
            test: /\.(s[ac]ss|css)$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
                // {
                //   loader : 'sass-loader',
                //   options: {
                //     includePaths: ['./node_modules']
                //   }
                // }
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      name: './../[path][name].[ext]',
                      // publicPath: './../media/img',
                      outputPath: './../media'
                    } 
                
                },
            ],
        },
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },

        {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        // 配置 HTML 模板路徑與生成名稱 (第三步)
        template: './dist/index.html',
        filename: './index.html',
      }),
      
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new WebpackPwaManifest({
      publicPath : './work',
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous,
      start_url: "/pwa",
      icons: [
        {
          src: path.resolve('src/media/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes,
          destination: path.join('./../src/media', 'assets')
        },
        {
          src: path.resolve('src/media/assets/icon.png'),
          destination: path.join('./../src/media', 'assets'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/media/assets/icon.png'),
          destination: path.join('./../src/media', 'assets'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    })
  ]
};