const module_loader = require('../modules/module_loader.js');

let mlfp = new module_loader();
document.getElementById('global-components').innerHTML = mlfp.buildDOM();
