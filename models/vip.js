let db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.lettreVIP = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT LEFT(VIP_NOM,1) as lettre FROM `vip` ORDER BY lettre;";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.listeVIP = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NUMERO as numero, VIP_PRENOM as prenom, VIP_NOM as nom from vip ORDER BY nom;";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsLettre = function(lettre ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT p.VIP_NUMERO as numero, VIP_PRENOM as prenom, VIP_NOM as nom, PHOTO_ADRESSE as photo FROM vip v JOIN photo p ON p.VIP_NUMERO=v.VIP_NUMERO " +
                "WHERE VIP_NOM LIKE'"+lettre+"%' " +
                "and PHOTO_NUMERO=1;";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsVIPPrincipale = function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT VIP_NAISSANCE as naissance, NATIONALITE_NOM nationalite, v.VIP_SEXE as sexe, p.VIP_NUMERO as numero, VIP_PRENOM as prenom, VIP_NOM as nom, PHOTO_ADRESSE as photo FROM vip v JOIN photo p ON p.VIP_NUMERO=v.VIP_NUMERO " +
                "JOIN nationalite n ON v.NATIONALITE_NUMERO=n.NATIONALITE_NUMERO " +
                "WHERE p.VIP_NUMERO="+numero+" " +
                "and PHOTO_NUMERO=1;";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsVIPMariage= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT v2.VIP_NUMERO as numero, v2.VIP_NOM as nom , v2.VIP_PRENOM as prenom, DATE_EVENEMENT as dateMariage, MARIAGE_LIEU as lieu ,MARIAGE_FIN as finMariage," +
                "MARIAGE_MOTIFFIN as motifFin, PHOTO_ADRESSE as photo, SUBSTR(v2.VIP_TEXTE, 1, 150) as description FROM vip v join mariage m ON v.VIP_NUMERO=m.VIP_NUMERO " +
                "JOIN vip v2 ON m.VIP_VIP_NUMERO=v2.VIP_NUMERO join photo p on v2.VIP_NUMERO=p.VIP_NUMERO WHERE p.PHOTO_NUMERO=1 and v.VIP_NUMERO =" + numero + "";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsVIPQuiSuisJe= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT VIP_TEXTE as qui " +
                "FROM vip v WHERE v.VIP_NUMERO =" + numero + "";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsVIPPhotos = function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT PHOTO_ADRESSE as photo, PHOTO_COMMENTAIRE as commentaire FROM vip v JOIN photo p ON p.VIP_NUMERO=v.VIP_NUMERO " +
                "WHERE p.VIP_NUMERO= "+numero+" and PHOTO_NUMERO != 1;";

            console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsVIPLiaison= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT v2.VIP_NUMERO as numero, v2.VIP_NOM as nom , v2.VIP_PRENOM as prenom, DATE_EVENEMENT as " +
                "dateLiaison, LIAISON_MOTIFFIN as motifFin, PHOTO_ADRESSE as photo, SUBSTR(v2.VIP_TEXTE, 1, 150) as description " +
                "FROM vip v join liaison l ON v.VIP_NUMERO=l.VIP_NUMERO JOIN vip v2 ON l.VIP_VIP_NUMERO=v2.VIP_NUMERO join photo p on v2.VIP_NUMERO=p.VIP_NUMERO " +
                "WHERE p.PHOTO_NUMERO=1 and v.VIP_NUMERO =" + numero + "";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.estActeur= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT m.VIP_NUMERO FROM acteur m JOIN vip v ON v.VIP_NUMERO=m.VIP_NUMERO WHERE v.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.estMannequin= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT m.VIP_NUMERO FROM mannequin m JOIN vip v ON v.VIP_NUMERO=m.VIP_NUMERO WHERE v.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.articleVIP= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT ARTICLE_RESUME as texte, ARTICLE_DATE_INSERT as date, v.VIP_NUMERO as numero, VIP_PRENOM as prenom, VIP_NOM as nom from " +
                "article a join apoursujet aps on a.ARTICLE_NUMERO=aps.ARTICLE_NUMERO join vip v on aps.VIP_NUMERO=v.VIP_NUMERO where v.VIP_NUMERO="+ numero +"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};


module.exports.listerPhotos = function(callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT PHOTO_ADRESSE as photo FROM vip v JOIN photo p ON p.VIP_NUMERO=v.VIP_NUMERO " +
                "WHERE PHOTO_NUMERO = 1;";

            console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};