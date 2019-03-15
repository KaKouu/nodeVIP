let model = require("../models/vip.js");
let async = require("async");

// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = function(request, response){
   response.title = 'Album des stars';
    model.listerPhotos(function (err, result) {  // appel le module test qui exécute la requete SQL
        if (err) {
            console.log(err);
            return;
        }

        response.listePhotos = result; // result contient : [ RowDataPacket { NB: 37 } ]
        console.log();
        response.render('listerAlbum', response);

    })
  } ;
