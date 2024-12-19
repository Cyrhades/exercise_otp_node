exports.get = (req, res) => {
    let username;
    if(req.session.user.username) {
        if(req.params.username) {        
            username = req.params.username;
        } else {
            username = req.session.user.username;
        }
        require("./repo.user.js").getByUsername(username).then((user) => {
            return res.render('profile', { 
                page: "profile",
                title: res.__('Welcome to DevSocial'),
                profil : user,
                account: user.email
            });
        }).catch(error =>{
            req.flash('error', res.__('An error has occurred.'));
            return res.redirect('/');
        });
    } else {
        req.flash('error', res.__('An error has occurred.'));
        return res.redirect('/');
    }
};