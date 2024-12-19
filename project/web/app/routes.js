const auth = require('./auth.middleware.js');

module.exports = (app) => {
   // Route pour la page d'accueil
    app.get('/', require("./controller.home.js").get);
   
    // Route GET pour la page d'inscription
    app.get('/signup', auth.needNoAuth, require("./controller.signup.js").get);
    // Route POST pour gérer les données du formulaire d'inscription
    app.post('/signup', auth.needNoAuth, require("./controller.signup.js").post);

    // Route GET pour la page de connexion
    app.get('/signin', auth.needNoAuth, require("./controller.signin.js").get);
    // Route POST pour gérer les données du formulaire de connexion
    app.post('/signin', auth.needNoAuth, require("./controller.signin.js").post);

    // Disconnect
    app.get('/disconnect', auth.needAuth, require("./controller.signin.js").disconnect);

    // Route pour la page de profil
    app.get('/profile', auth.needAuth, require("./controller.profile.js").get);
}