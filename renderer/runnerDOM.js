'use strict';

let globalDOM = document.getElementById('global-components');

let runnerDOM = {
  emptyDOMTree: function() {
    globalDOM.innerHTML = '';
  },
  add: function(DOM) {
    globalDOM.innerHTML += DOM;
  },
  remove: function(selector) {
    globalDOM.querySelector(selector).innerHTML = '';
  },
  update: function(selector, DOM) {
    globalDOM.querySelector(selector).innerHTML = DOM;
  }
}

module.exports = runnerDOM;
