/**
 * `addon_loader` iterates through the sub folders of `modules`
 * and tries to find a `addon.json` in them, after which it
 * adds generates an `addons.json` file that the app uses to
 * load the addons.
 */

'use strict';


/**
 * Loading addons
 * Currently static, eventually becomes dynamic process.
 */
const runner = require('./runner/runner.js');


function ADDON_LOADER() {}

ADDON_LOADER.prototype.init = function() {
  console.log('hi there');
  runner.init();
};

ADDON_LOADER.prototype.buildDOM = function () {
  return runner.buildDOM();
};

module.exports = ADDON_LOADER;
