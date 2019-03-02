var fs = require('fs');

var sqlScript = fs.readFileSync('ws-marathon-2016-db.sql', 'utf-8');

console.log(sqlScript);