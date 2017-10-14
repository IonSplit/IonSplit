const addon_loader = require('../addons/addon_loader.js');

let al = new addon_loader();
document.getElementById('global-components').innerHTML = al.buildDOM();

for (var i = 0; i < al.getAddons().length; i++) {
  runnerDOM.add(al.getAddonInitialDOM(al.getAddons()[i]));
}
