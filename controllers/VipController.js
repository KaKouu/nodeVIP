
let model = require("../models/vip.js");
let async=require("async");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = function(request, response){
   response.title = 'Répertoire des stars';

    model.lettreVIP(function(err, result){  // appel le module test qui exécute la requete SQL
        if (err) {
            console.log(err);
            return;
        }

        response.lettreVIP = result; // result contient : [ RowDataPacket { NB: 37 } ]

      response.render('repertoireVips', response);

  } )};

module.exports.DetailsLettre = 	function(request,response){
    response.title = 'Répertoire des stars';
    let letterData = request.params.lettreRouter;
    console.log(letterData);

    async.parallel([

            function(callback){
                model.lettreVIP(function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsLettre(letterData,function(err,result){ callback(null,result) });
            },

        ],

        function (err,result){
            if(err){
                console.log(err);
                return;
            }

            response.lettreVIP = result[0];
            response.detailsLettre = result[1];
            response.render('repertoireVips', response);

        }
    );
};

module.exports.DetailsVip = function(request,response){
    response.title = 'Répertoire des stars';
    let numData = request.params.numeroRouter;

    async.parallel([

            function(callback){
                model.lettreVIP(function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsVIPPrincipale(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsVIPMariage(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsVIPQuiSuisJe(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsVIPPhotos(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsVIPLiaison(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.estActeur(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.estMannequin(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.estChanteur(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.estRealisateur(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.estCouturier(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsActeur(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsMannequin(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsChanteur(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsRealisateur(numData,function(err,result){ callback(null,result) });
            },

            function(callback){
                model.detailsCouturier(numData,function(err,result){ callback(null,result) });
            },

        ],

        function (err,result){
            if(err){
                console.log(err);
                return;
            }

            response.lettreVIP = result[0];
            response.detailsVIP = result[1];
            response.detailsMariage = result[2];
            response.detailsQuiSuisJe = result[3];
            response.detailsVIPPhotos = result[4];
            response.detailsVIPLiaison = result[5];
            response.estActeur = result[6];
            response.estMannequin = result[7];
            response.estChanteur = result[8];
            response.estRealisateur= result[9];
            response.estCouturier = result[10];
            response.detailsActeur = result[11];
            response.detailsMannequin = result[12];
            response.detailsChanteur = result[13];
            response.detailsRealisateur = result[14];
            response.detailsCouturier = result[15];
            response.render('repertoireVips', response);

        }
    );

};
