module.exports = {
  plugins: [
    require('autoprefixer')(),
  ],
  options: {
    sourceMap: process.env.NODE_ENV !== 'production',
  },
};
