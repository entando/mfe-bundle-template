module.exports = {
  entry: "/src/main.ts",
  output: {
    library: "angular-widget",
    libraryTarget: "umd",
  },
  /**
   * zone-polyfill fragment will inject the polyfill
   * at runtime must include the frament inside the template that use the Angular MFE
   * */
  externals: {
    zone: "zone",
  },
  /**
   * runtime chunk must be disable for prevent runtime collision with other MFEs in the same page
   */
  optimization: {
    runtimeChunk: false,
  },
};
