var josent = require("../src/index.js");
console.log('josent ',josent);
josent
    .get('https://api.github.com/users/defunkt')
    .then(function(json){
       console.log('json: ',json);
     });
