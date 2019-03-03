var fs = require('fs');

var sqlScript = fs.readFileSync('ws-marathon-2016-db.sql', 'utf-8');

var regex = sqlScript.replace(/DateTime/g, "DateTime2");

fs.writeFile("updated-sqript.sql", regex, function(err, data) {
    if (err) console.log(err);
    console.log("Script successfully updated!")
});