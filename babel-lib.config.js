module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ]
  ],
  ignore: [/\.spec\.js$/]
};
