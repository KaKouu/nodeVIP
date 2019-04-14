let model = require("../models/vip.js");
let async = require("async");

// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = function (request, response) {
    response.title = 'Album des stars';
    async.parallel([

            function (callback) {
                model.listerPhotos(function (err, result) {
                    callback(null, result)
                });
            },

            function (callback) {
                model.maxVIP(function (err, result) {
                    callback(null, result)
                });
            },
        ],
        function (err, result) {
            if (err) {
                console.log(err);
                return;
            }

            response.listePhotos = result[0];
            response.maxVIP = result[1];
            console.log(result[1]);
            response.render('listerAlbum', response);

        }
    );
};


module.exports.DetailsAlbum = function (request, response) {
    response.title = 'Album des stars';
    let numeroData = request.params.numeroRouter;
    console.log(numeroData);

    async.parallel([

            function (callback) {
                model.listerPhotos(function (err, result) {
                    callback(null, result)
                });
            },

            function (callback) {
                model.maxVIP(function (err, result) {
                    callback(null, result)
                });
            },

            function (callback) {
                model.detailAlbum(numeroData, function (err, result) {
                    callback(null, result)
                });
            },
        ],
        function (err, result) {
            if (err) {
                console.log(err);
                return;
            }

            response.listePhotos = result[0];
            response.maxVIP = result[1];
            response.detailAlbum = result[2];
            console.log(result[1]);
            response.render('listerAlbum', response);

        }
    );
};


