/**
 * Helpers
 */
const path = require('path');
const root = path.join.bind(path, path.resolve(__dirname));
const nodeExternals = require('webpack-node-externals');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { ifProduction } = getIfUtils(process.env.NODE_ENV);

/**
 * Webpack Plugins
 */
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const CommonsChunksPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

/**
 * Webpack config
 */
module.exports = [
  { // Browser bundles

    /**
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * https://webpack.js.org/configuration/other-options/#cache
     */
    cache: false,

    /**
     * Developer tool to enhance debugging
     * https://webpack.js.org/configuration/devtool/
     */
    devtool: ifProduction('source-map', false),

    /**
     * The entry point for the bundle
     * https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: {
      // Bootstrap
      'twbs': `bootstrap-loader/lib/bootstrap.loader?configFilePath=${root('.bootstraprc')}!bootstrap-loader/no-op.js`,

      // Site scripts
      'site': ['@babel/polyfill', root('assets/js/browser.js')],
    },

    /**
     * Options affecting the resolving of modules.
     * https://webpack.js.org/configuration/resolve/
     */
    resolve: {

      // An array of extensions that should be used to resolve modules.
      extensions: ['*', '.json', '.js', '.css', '.scss'],

      // An array of directory names to be resolved to the current directory
      modules: [root('assets/js'), root('assets/styles'), root('node_modules')],
    },

    /**
     * Options affecting the output of the compilation.
     * https://webpack.js.org/configuration/output/
     */
    output: {

      // The output directory as absolute path (required).
      path: root('assets/build.' + ifProduction('prod', 'dev')),

      // Public URL base of the files.
      publicPath: '/',

      // Specifies the name of each output file on disk.
      filename: '[name].bundle.js',

      // The filename of the SourceMaps for the JavaScript files.
      sourceMapFilename: '[name].bundle.map',

      // The filename of non-entry chunks as relative path inside the output.path directory.
      chunkFilename: '[id].chunk.js',
    },

    /**
     * Options affecting the normal modules.
     * https://webpack.js.org/configuration/module/
     */
    module: {
      rules: [
        { // JavaScript
          test: /\.js$/,
          include: [
            root('assets/js'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      browsers: 'last 3 versions',
                    },
                  }],
                  '@babel/preset-react'
                ],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-decorators',
                  '@babel/plugin-proposal-object-rest-spread'
                ],
              },
            },
          ],
        },

        { // CSS
          test: /\.css$/,
          include: [
            root('assets/styles'),
          ],
          use: ifProduction(
            ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                { loader: 'css-loader', options: { sourceMap: false } },
                { loader: 'postcss-loader', options: { sourceMap: false } },
              ],
            }),
            [
              { loader: 'style-loader', options: { sourceMap: true } },
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'postcss-loader', options: { sourceMap: true } },
            ]
          ),
        },

        { // SCSS
          test: /\.scss$/,
          include: [
            root('assets/styles'),
          ],
          use: ifProduction(
            ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                { loader: 'css-loader', options: { sourceMap: false } },
                { loader: 'postcss-loader', options: { sourceMap: false } },
                { loader: 'sass-loader', options: { sourceMap: false } },
              ]
            }),
            [
              { loader: 'style-loader', options: { sourceMap: true } },
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'postcss-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ]
          ),
        },

        /*
        { // JQuery and Bootstap scripts
          test: /bootstrap\/dist\/js\//,
          use: [
            'imports-loader?jQuery=jquery',
            'imports-loader?Popper=popper.js',
            'imports-loader?Tooltip=bootstrap/js/dist/tooltip',
            'imports-loader?Alert=bootstrap/js/dist/alert',
            'imports-loader?Button=bootstrap/js/dist/button',
            'imports-loader?Carousel=bootstrap/js/dist/carousel',
            'imports-loader?Collapse=bootstrap/js/dist/collapse',
            'imports-loader?Dropdown=bootstrap/js/dist/dropdown',
            'imports-loader?Modal=bootstrap/js/dist/modal',
            'imports-loader?Popover=bootstrap/js/dist/popover',
            'imports-loader?Scrollspy=bootstrap/js/dist/scrollspy',
            'imports-loader?Tab=bootstrap/js/dist/tab',
            'imports-loader?Util=bootstrap/js/dist/util',
          ]
        },
        */

        { // Font files
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },

        { // Font files
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
      ],
    },

    /**
     * Add additional plugins to the compiler.
     * https://webpack.js.org/configuration/plugins/
     */
    plugins: removeEmpty([
      /**
       * EnvironmentPlugin
       * https://webpack.js.org/plugins/environment-plugin/
       *
       * Pass NODE_ENV environment variable
       */
      new EnvironmentPlugin(['NODE_ENV']),

      /**
       * NoEmitOnErrorsPlugin
       * https://webpack.js.org/plugins/no-emit-on-errors-plugin/
       *
       * Ensures that no assets are emitted that include errors.
       */
      new NoEmitOnErrorsPlugin(),

      /**
       * CleanWebpackPlugin
       * https://www.npmjs.com/package/clean-webpack-plugin
       *
       * Cleans build directory before building
       */
      new CleanWebpackPlugin([ root('assets/build.' + ifProduction('prod', 'dev')) ], {
        root: root(),
      }),

      /**
       * CommonsChunksPlugin
       * https://webpack.js.org/plugins/commons-chunk-plugin/
       *
       * By separating common modules from bundles, the resulting chunked file can be loaded once initially,
       * and stored in cache for later use.
       */
      new CommonsChunksPlugin({
        name: 'common',
        filename: 'common.bundle.js',
      }),

      /**
       * ExtractTextPlugin
       * https://webpack.js.org/plugins/extract-text-webpack-plugin/
       *
       * Plugin moves all the required *.css modules in entry chunks into a separate CSS file.
       * So your styles are no longer inlined into the JS bundle, but in a separate CSS file.
       */
      ifProduction(
        new ExtractTextPlugin({
          filename: '[name].css',
          allChunks: true,
        })
      ),

      /**
       * OptimizeCssAssetsPlugin
       * https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
       *
       * It will search for CSS assets during the Webpack build and will optimize / minimize the CSS
       */
      ifProduction(
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true
        })
      ),

      /**
       * ProvidePlugin
       * https://webpack.js.org/plugins/provide-plugin/
       *
       * Whenever the identifier is encountered as free variable in a module, its module is loaded automatically
       */
      /*
      new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
        Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
        Button: 'exports-loader?Button!bootstrap/js/dist/button',
        Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
        Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
        Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
        Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
        Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
        Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
        Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
        Util: 'exports-loader?Util!bootstrap/js/dist/util'
      }),
      */

      /**
       * UglifyjsWebpackPlugin
       * https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
       *
       * This plugin uses UglifyJS v3 (uglify-es) to minify your JavaScript
       */
      ifProduction(
        new UglifyJsPlugin()
      ),
    ]),
  },

  { // Server bundles
    cache: false,
    devtool: false,
    entry: {
      'server': root('assets/js/server.js'),
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
      extensions: ['*', '.json', '.js'],
      modules: [root('assets/js'), root('node_modules')],
    },
    output: {
      path: root('assets/build.' + ifProduction('prod','dev')),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js',
      libraryTarget: "commonjs2",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            root('assets/js'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      node: '8.0'
                    }
                  }],
                  '@babel/preset-react'
                ],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-decorators',
                  '@babel/plugin-proposal-object-rest-spread'
                ],
              },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          include: [
            root('assets/styles'),
          ],
          use: [
            'ignore-loader',
          ],
        },
      ],
    },
    plugins: [
      new EnvironmentPlugin(['NODE_ENV']),
      new NoEmitOnErrorsPlugin(),
    ],
  }
];
