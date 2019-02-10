
let model = require("../models/vip.js");

// ///////////////////////// J U S T E    U N    P E T I T    T E S T

module.exports.Test = 	function(request, response){
 response.title = 'Test à supprimer';
 model.test(function(err, result){  // appel le module test qui exécute la requete SQL
     if (err) {
         console.log(err);
         return;
     }
    response.nbVip = result; // result contient : [ RowDataPacket { NB: 37 } ]

    response.nbVip2 = result[0]; // result[0] contient  RowDataPacket { NB: 37 }
    
    response.render('test', response); // appel la vue Handlebars qui va afficher le résultat
} );
}
