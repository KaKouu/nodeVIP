let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AlbumController = require('./../controllers/AlbumController');
let ArticleController = require('./../controllers/ArticleController');
let TestController = require('./../controllers/TestController');



// Routes
module.exports = function(app){

  // tests à supprimer
    app.get('/test', TestController.Test);

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

// VIP
    app.get('/repertoire', VipController.Repertoire);
    app.get('/repertoire/:lettreRouter', VipController.DetailsLettre);
    app.get('/repertoire/vip/:numeroRouter', VipController.DetailsVip);

// articles
    app.get('/articles', ArticleController.DetailsVip);
    app.get('/articles/:numeroRouter', ArticleController.DetailsArticle);

 // albums
   app.get('/album', AlbumController.ListerAlbum);
   app.get('/album/:numeroRouter', AlbumController.DetailsAlbum);

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
