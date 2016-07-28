const seeder = require('mongoose-seed-plus');
const configDB   = require('./config/database')


seeder.connect(configDB.url, function() {

  seeder.start(__dirname + '/migrations', [
    
    { path: 'models/Country.js', name: 'Country', clear: false },
    { path: 'models/Project.js', name: 'Project', clear: false }
  ], true);
  debugger;
});