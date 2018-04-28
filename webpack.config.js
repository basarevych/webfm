// Helpers
const path = require('path');
const root = path.join.bind(path, path.resolve(__dirname));
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { ifProduction, ifDevelopment } = getIfUtils(process.env.NODE_ENV);

// Webpack Plugins
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
 * Target environments
 */
const targetServer = {
  node: '8.0',
};
const targetBrowsers = {
  browsers: [
    '>1%',
    'last 3 versions',
    'Firefox ESR',
    'not ie < 9', // React doesn't support IE8 anyway
  ],
  flexbox: 'no-2009',
};

/**
 * Webpack loaders
 */
const codeLoaders = targets => {
  return [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: ifDevelopment(true, false),
        presets: [
          ['env', { targets }],
          'react'
        ],
        plugins: [
          'lodash',
          'transform-runtime',
          'transform-class-properties',
          'transform-decorators-legacy',
          'transform-object-rest-spread'
        ],
      },
    },
  ];
};
const styleLoaders = variant => {
  let sassLoader = variant === 'sass' ? true : undefined;
  let lessLoader = variant === 'less' ? true : undefined;
  return ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: removeEmpty([
      {
        loader: 'css-loader',
        options: {
          sourceMap: ifDevelopment(true, false),
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: ifDevelopment(true, false),
          plugins: [require('autoprefixer')(targetBrowsers)],
        }
      },
      sassLoader && {
        loader: 'sass-loader',
        options: {
          sourceMap: ifDevelopment(true, false),
        },
      },
      lessLoader && {
        loader: 'less-loader',
        options: {
          //plugins: [require(root('front/styles/semantic-ui/no-remote-files-plugin'))],
          sourceMap: ifDevelopment(true, false),
        },
      },
    ]),
  });
};

/**
 * Webpack config
 */
const publicRoot = root.bind(root, 'assets/build.' + ifProduction('prod', 'dev'));
module.exports = [

  { // Browser bundle

    /**
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * https://webpack.js.org/configuration/other-options/#cache
     */
    cache: ifDevelopment(true, false),

    /**
     * Developer tool to enhance debugging
     * https://webpack.js.org/configuration/devtool/
     */
    devtool: ifDevelopment('inline-source-map', false),

    /**
     * How webpack notifies you of assets and entrypoints that exceed a specific file limit.
     * https://webpack.js.org/configuration/performance/
     */
    performance: {
      hints: false,
    },

    /**
     * The entry point for the bundle
     * https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: {
      'site': [
        root('assets/js/browser.js'),
        root('assets/styles/index.scss'),
      ],
    },

    /**
     * Options affecting the resolving of modules.
     * https://webpack.js.org/configuration/resolve/
     */
    resolve: {

      // An array of extensions that should be used to resolve modules.
      extensions: ['*', '.json', '.js', '.jsx', '.css', '.scss', '.less'],

      // An array of directory names to be resolved to the current directory
      modules: [root('assets/js'), root('assets/styles'), root('node_modules')],
    },

    /**
     * Options affecting the output of the compilation.
     * https://webpack.js.org/configuration/output/
     */
    output: {

      // The output directory as absolute path (required).
      path: publicRoot(),

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
          test: /\.jsx?$/,
          include: [root('assets/js')],
          use: codeLoaders(targetBrowsers),
        },

        { // CSS
          test: /\.css$/,
          include: [root('assets/styles'), root('node_modules')],
          use: styleLoaders(),
        },

        { // SCSS
          test: /\.scss$/,
          include: [root('assets/styles'), root('node_modules')],
          use: styleLoaders('sass'),
        },

        { // LESS
          test: /\.less$/,
          include: [root('assets/styles'), root('node_modules')],
          use: styleLoaders('less'),
        },

        { // loader for static assets
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          include: [root('assets/styles'), root('node_modules')],
          use: {
            loader: 'url-loader',
            options: {
              limit: 10240,
              absolute: true,
              name: 'img/[name]-[hash:7].[ext]'
            }
          },
        }, {
          test: /\.(woff|woff2|ttf|eot)$/,
          include: [root('assets/styles'), root('node_modules')],
          use: {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'fonts/[name]-[hash:7].[ext]'
            }
          },
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
       * CleanWebpackPlugin
       * https://www.npmjs.com/package/clean-webpack-plugin
       *
       * Cleans build directory before building
       */
      new CleanWebpackPlugin([ publicRoot() ]),

      /**
       * ProvidePlugin
       * https://webpack.js.org/plugins/provide-plugin/
       *
       * Automatically load modules
       */
      new ProvidePlugin({
        _: 'lodash',
      }),

      /**
       * NoEmitOnErrorsPlugin
       * https://webpack.js.org/plugins/no-emit-on-errors-plugin/
       *
       * Ensures that no assets are emitted that include errors.
       */
      new NoEmitOnErrorsPlugin(),

      /**
       * ExtractTextPlugin
       * https://webpack.js.org/plugins/extract-text-webpack-plugin/
       *
       * Plugin moves all the required *.css modules in entry chunks into a separate CSS file.
       * So your styles are no longer inlined into the JS bundle, but in a separate CSS file.
       */
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true,
      }),

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
       * UglifyJsPlugin
       * https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
       *
       * This plugin uses UglifyJS v3 (uglify-es) to minify your JavaScript
       */
      ifProduction(
        new UglifyJsPlugin()
      ),
    ]),
  },

  { // Server bundle
    cache: ifDevelopment(true, false),
    devtool: false,
    performance: {
      hints: false,
    },
    entry: {
      'server': [
        root('assets/js/server.js'),
      ]
    },
    target: 'node',
    resolve: {
      extensions: ['*', '.json', '.js', '.jsx'],
      modules: [root('assets/js'), root('node_modules')],
    },
    output: {
      path: publicRoot(),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [root('assets/js')],
          use: codeLoaders(targetServer),
        },
        {
          test: /\.(css|scss|less)$/,
          include: [root('assets/styles'), root('node_modules')],
          use: ['ignore-loader'],
        },
      ],
    },
    plugins: removeEmpty([
      new EnvironmentPlugin(['NODE_ENV']),
      new NoEmitOnErrorsPlugin(),
      ifProduction(
        new UglifyJsPlugin()
      ),
    ]),
  }
];
