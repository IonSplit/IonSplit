const addon_loader = require('../addons/addon_loader.js');
const runnerDOM = require('./runnerDOM.js');

let al = new addon_loader();
//document.getElementById('global-components').innerHTML = al.buildDOM();
runnerDOM.emptyDOMTree();

for (let i = 0; i < /*al.getAddons().length;*/ 1; i++) {
  runnerDOM.add(/*al.getAddonInitialDOM(al.getAddons()[i])*/ al.buildDOM());
}
