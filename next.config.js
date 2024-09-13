module.exports = {
  webpack: (config) => {
    let oneOfRules = config.module.rules.find((x) => x.oneOf).oneOf;

    // remove the webpack rule to error on global css/scss
    oneOfRules = oneOfRules.filter(
      (x) => x.issuer || !x.use || x.use.loader !== "error-loader"
    );

    // modify the webpack rule targeting only *.module.scss to target only *.scss
    const newScssRule = oneOfRules.find(
      (x) => x.test && x.test.toString() === /\.module\.(scss|sass)$/.toString()
    );
    newScssRule.test = /\.(scss|sass)$/;
    newScssRule.sideEffects = true;

    if (newScssRule.use[0].options.modules) {
      newScssRule.use[0].options.modules = false;
    }

    if (newScssRule.use[1].options.modules) {
      newScssRule.use[1].options.modules = false;
    }

    config.module.rules.splice(
      config.module.rules.findIndex((x) => x.oneOf),
      1,
      {
        oneOf: oneOfRules
      }
    );

    return config;
  },
  typescript: {
    tsconfigPath: "./tsconfig.next.json"
  }
};
