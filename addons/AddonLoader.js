/**
 * `addon_loader` iterates through the sub folders of `modules`
 * and tries to find a `addon.json` in them, after which it
 * adds generates an `addons.json` file that the app uses to
 * load the addons.
 * functions:
 *
 * - getAddons() : get list of addons names in an array
 * - getAddonInfo(name) : get all info of an addon in a json object
 * - getAddonInitialDOM(name): return the DOM template of the addon
 *
 */

'use strict';

/**
 * Loading addons
 * Currently static, eventually becomes dynamic process.
 */
const Runner = require('./runner/Runner.js');

function ADDON_LOADER() {}

ADDON_LOADER.prototype.init = function() {
  console.log('hi there');
  Runner.init();
};

ADDON_LOADER.prototype.buildDOM = function() {
  return Runner.buildDOM();
};

ADDON_LOADER.prototype.getAddons = function() {
  // FIXME:
  return [];
};

ADDON_LOADER.prototype.getAddonInfo = function(name) {
  // FIXME:
};

ADDON_LOADER.prototype.getAddonInitialDOM = function(name) {
  // FIXME:
};

module.exports = ADDON_LOADER;
