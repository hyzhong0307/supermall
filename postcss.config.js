module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      // options
      viewportWidth:375,
      viewportHeight:667,
      unitPrecision:5,
      viewportUnit: 'vw',
      selectorBlackList: ['tab-bar'],
      minPixelValue: 1,
      mediaQuery: false,
    }
  }
}