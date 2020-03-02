// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.

/* eslint-disable no-console */
const fs = require('fs');
const webpack = require('webpack');
const { config } = require('../../config/webpack.config.prod');
const { chalkError, chalkSuccess, chalkWarning, chalkProcessing } = require('../../config/chalkConfig');

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

const runWebpack = () => {
  console.log(chalkProcessing('Generating minified bundle. This will take a moment...'));

  webpack(config).run((error, stats) => {
    if (error) {
      // so a fatal error occurred. Stop here.
      console.log(chalkError(error));
      return error;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
      return jsonStats.errors.map(error => console.log(chalkError(error)));
    }

    if (jsonStats.hasWarnings) {
      console.log(chalkWarning('Webpack generated the following warnings: '));
      jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
    }

    const json = JSON.stringify(jsonStats);
    fs.writeFile('tools/website/webpack-stats.json', json, 'utf8', err => {
      if (err) return console.error(err);
    });

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log(chalkSuccess("Your app is compiled in production mode in /dist. It's ready to roll!"));

    return 'success';
  });
};

(async() => {
  await runWebpack();
})();

/* eslint-enable no-console */
