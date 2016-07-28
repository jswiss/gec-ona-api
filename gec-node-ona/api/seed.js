const seeder = require('mongoose-seed-plus');
const configDB   = require('./config/database')


seeder.connect(configDB.url, function() {

  seeder.start(__dirname + '/migrations', [
    
    { path: 'models/Country.js', name: 'Country', clear: true },
    { path: 'models/Project.js', name: 'Project', clear: true }
  ], true);
});