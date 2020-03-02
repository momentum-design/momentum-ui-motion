// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.

/* eslint-disable no-console */

const webpack = require('webpack');
const fse = require('fs-extra');
const {
  chalkError,
  chalkSuccess,
  chalkWarning,
  chalkProcessing
} = require('../../config/chalkConfig');
const { config } = require('../../config/webpack.config.libProd');
const { componentRoot, libRoot } = require('../../config/constants');
const buildBabel = require('./buildBabel');

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

// Remove Lib Directory
const runLib = async() => {
  console.log(chalkProcessing('Building: '), chalkSuccess('npm module'));
  if (fse.existsSync(libRoot)) await fse.remove(libRoot);
  // Create Lib Directory
  await fse.mkdirs(libRoot);
  // Build Babel Transformed Files
  await buildBabel(componentRoot, libRoot);
  console.log(chalkProcessing('Built: '), chalkSuccess('npm module'));
};

const runWebpack = () => {
  console.log(
    chalkProcessing('Generating minified bundle. This will take a moment...')
  );

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

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log(
      chalkSuccess(
        "Your app is compiled in production mode in /bundles. It's ready to roll!"
      )
    );

    return 'success';
  });
};

module.exports = {
  runLib,
  runWebpack
};

/* eslint-enable no-console */
