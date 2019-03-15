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


module.exports.estChanteur= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT m.VIP_NUMERO FROM chanteur m JOIN vip v ON v.VIP_NUMERO=m.VIP_NUMERO WHERE v.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.estRealisateur= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT m.VIP_NUMERO FROM realisateur m JOIN vip v ON v.VIP_NUMERO=m.VIP_NUMERO WHERE v.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.estCouturier= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT m.VIP_NUMERO FROM couturier m JOIN vip v ON v.VIP_NUMERO=m.VIP_NUMERO WHERE v.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsActeur= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT FILM_TITRE as titre, FILM_DATEREALISATION as date, v.VIP_NUMERO as numRea, VIP_PRENOM as preRea,VIP_NOM as nomRea" +
                " FROM acteur a JOIN joue j ON a.VIP_NUMERO=j.VIP_NUMERO JOIN film f ON j.FILM_NUMERO=f.FILM_NUMERO " +
                "JOIN realisateur r ON r.VIP_NUMERO=f.VIP_NUMERO JOIN vip v ON v.VIP_NUMERO=r.VIP_NUMERO  WHERE a.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsMannequin= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT DEFILE_LIEU as lieu, DEFILE_DATE as date, v.VIP_PRENOM as preCou, v.VIP_NOM as nomCou, v.VIP_NUMERO as numCou " +
                "FROM defiledans dd JOIN defile d ON dd.DEFILE_NUMERO=d.DEFILE_NUMERO JOIN couturier c ON d.VIP_NUMERO=c.VIP_NUMERO " +
                "JOIN vip v ON v.VIP_NUMERO=c.VIP_NUMERO" +
                " WHERE dd.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsChanteur= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql ="SELECT ALBUM_TITRE as titre, ALBUM_DATE as date, MAISONDISQUE_NOM as maisonDisque " +
                "FROM chanteur c JOIN composer co ON c.VIP_NUMERO=CO.VIP_NUMERO JOIN album a ON co.ALBUM_NUMERO=a.ALBUM_NUMERO  " +
                "JOIN maisondisque m ON a.MAISONDISQUE_NUMERO=m.MAISONDISQUE_NUMERO" +
                " WHERE c.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsRealisateur= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql ="SELECT FILM_TITRE as titre, FILM_DATEREALISATION as date FROM realisateur r " +
                "JOIN film f ON r.VIP_NUMERO=f.VIP_NUMERO WHERE f.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsCouturier= function(numero ,callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql ="SELECT DEFILE_LIEU as lieu, DEFILE_DATE as date FROM defile r " +
                "JOIN couturier f ON r.VIP_NUMERO=f.VIP_NUMERO WHERE f.VIP_NUMERO="+numero+"";

            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};