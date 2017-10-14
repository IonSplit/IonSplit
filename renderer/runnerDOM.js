'use strict';

let runnerTitleDOM = document.getElementById('runner-title');
let globalComponentsDOM = document.getElementById('global-components');

let runnerDOM = {
  emptyDOMTree: function() {
    globalComponentsDOM.innerHTML = '';
  },
  add: function(DOM) {
    globalComponentsDOM.innerHTML += DOM;
  },
  remove: function(selector) {
    globalComponentsDOM.querySelector(selector).innerHTML = '';
  },
  update: function(selector, DOM) {
    globalComponentsDOM.querySelector(selector).innerHTML = DOM;
  },
  setRunTitle: function (title) {
    runnerTitleDOM.innerHTML = title;
  }
}

module.exports = runnerDOM;
