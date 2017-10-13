'use strict'
/**
 * `module_loader` iterates through the sub folders of `modules`
 * and tries to find a `module.json` in them, after which it
 * adds them to the `modules.json` file that the app uses to
 * load the addons.
 */
const electron = require('electron')
// Module to control application life.
const {ipcMain} = require('electron')

const path = require('path')
const url = require('url')

function MODULE_LOADER() {}

const runner = require('./runner/runner.js');


MODULE_LOADER.prototype.init = function() {
  console.log('hi there');
  runner.init();
};

MODULE_LOADER.prototype.buildDOM = function () {
  return runner.buildDOM();
};

module.exports = MODULE_LOADER;
