const path = require('path');
const root = path.join.bind(path, path.resolve(__dirname));
const nodeExternals = require('webpack-node-externals');

/**
 * Webpack Plugins
 */
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CommonsChunksPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const prod = (process.env.NODE_ENV === 'production');

/**
 * Webpack
 */
module.exports = [
  { // Browser

    /**
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     */
    cache: false,

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: prod ? false : 'source-map',

    /**
     * The entry point for the bundle
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'twbs': `bootstrap-loader/lib/bootstrap.loader?configFilePath=${root('.bootstraprc')}!bootstrap-loader/no-op.js`,
      'site': root('assets/js/browser.js'),
    },

    /**
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

      /**
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['*', '.json', '.js', '.css', '.scss'],

      // An array of directory names to be resolved to the current directory
      modules: [root('assets/js'), root('assets/styles'), root('node_modules')],
    },

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: root('assets/build.' + (prod ? 'prod' : 'dev')),

      /**
       * Public URL base of the files.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-publicpath
       */
      publicPath: '/',

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: '[name].bundle.map',

      /**
       * The filename of non-entry chunks as relative path
       * inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: '[id].chunk.js',
    },

    /**
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            root('assets/js'),
          ],
          use: [
            { loader: 'babel-loader' },
          ],
        },

        {
          test: /\.css$/,
          include: [
            root('assets/styles'),
          ],
          use: prod
            ? ExtractTextPlugin.extract({
                fallback: "style-loader",
                  use: [
                    { loader: 'css-loader', options: { sourceMap: false } },
                    { loader: 'postcss-loader', options: { sourceMap: false } },
                  ],
                })
            : [
                { loader: 'style-loader', options: { sourceMap: true } },
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
              ],
        },

        {
          test: /\.scss$/,
          include: [
            root('assets/styles'),
          ],
          use: prod
            ? ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                  { loader: 'css-loader', options: { sourceMap: false } },
                  { loader: 'postcss-loader', options: { sourceMap: false } },
                  { loader: 'sass-loader', options: { sourceMap: false } },
                ]
              })
            : [
              { loader: 'style-loader', options: { sourceMap: true } },
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'postcss-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ],
        },

        /*
        {
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

        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },

        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
      ],
    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      /**
       * Plugin: EnvironmentPlugin
       * Description: Shorthand for using the DefinePlugin on process.env keys
       *
       * Pass NODE_ENV environment variable
       *
       * See: https://webpack.js.org/plugins/environment-plugin/
       */
      new EnvironmentPlugin(['NODE_ENV']),

      /**
       * Plugin: NoEmitOnErrorsPlugin
       * Description: Skip the emitting phase whenever there are errors while compiling.
       *
       * Ensures that no assets are emitted that include errors.
       *
       * See: https://webpack.js.org/plugins/no-emit-on-errors-plugin/
       */
      new NoEmitOnErrorsPlugin(),

      /**
       * Plugin: CleanWebpackPlugin
       * Description: Plugin to remove/clean your build folder(s) before building
       *
       * Cleans build directory before building
       *
       * See: https://www.npmjs.com/package/clean-webpack-plugin
       */
      new CleanWebpackPlugin([ root('assets/build.' + (prod ? 'prod' : 'dev')) ], {
        root: root(),
      }),

      /**
       * Plugin: CommonsChunksPlugin
       * Description: Generate an extra chunk, which contains common modules shared between entry points.
       *
       * By separating common modules from bundles, the resulting chunked file can be loaded once initially,
       * and stored in cache for later use.
       *
       * See: https://webpack.js.org/plugins/commons-chunk-plugin/
       */
      new CommonsChunksPlugin({
        name: 'common',
        filename: 'common.bundle.js',
      }),

      /**
       * Plugin: ExtractTextPlugin
       * Description: Extract text from a bundle, or bundles, into a separate file.
       *
       * Plugin moves all the required *.css modules in entry chunks into a separate CSS file.
       * So your styles are no longer inlined into the JS bundle, but in a separate CSS file.
       *
       * See: https://www.npmjs.com/package/extract-text-webpack-plugin
       */
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true,
      }),

      /**
       * Plugin: OptimizeCssAssetsPlugin
       * Description: Optimize CSS assets
       *
       * It will search for CSS assets during the Webpack build and will optimize / minimize the CSS
       *
       * See: https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
       */
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),

      /**
       * Plugin: ProvidePlugin
       * Description: Autoload modules
       *
       * Whenever the identifier is encountered as free variable in a module, its module is loaded automatically
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#provideplugin
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
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       * Loaders are switched into minimizing mode.
       *
       * See: https://www.npmjs.com/package/uglifyjs-webpack-plugin
       */
      new UglifyJsPlugin({
        uglifyOptions: prod
          ? { // prod
            beautify: false,
            output: {
              comments: false
            },
            compress: {
              warnings: false,
              conditionals: true,
              unused: true,
              comparisons: true,
              sequences: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true,
              negate_iife: false // we need this for lazy v8
            },
          }
          : { // debug
            beautify: true,
            output: {
              comments: true,
            },
            mangle: false,
            compress: {
              warnings: false,
              keep_fnames: true,
              drop_debugger: false,
              dead_code: false,
              unused: false
            },
          },
        sourceMap: !prod,
      }),
    ],
  },

  { // Server
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
      path: root('assets/build.' + (prod ? 'prod' : 'dev')),
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
            'babel-loader',
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
