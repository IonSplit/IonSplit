const addon_loader = require('../addons/addon_loader.js');

let alfp = new addon_loader();
document.getElementById('global-components').innerHTML = alfp.buildDOM();
