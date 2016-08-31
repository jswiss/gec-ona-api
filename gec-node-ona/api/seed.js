const seeder = require('mongoose-seed-plus');
const configDB   = require('./config/database')


seeder.connect(configDB.url, function() {

  seeder.start(__dirname + '/migrations', [
    
    { path: 'models/Project.js', name: 'Project', clear: false },
    { path: 'models/School.js', name: 'School', clear: false }
  ], true);
  debugger;
});