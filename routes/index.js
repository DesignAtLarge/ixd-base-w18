// root route
exports.landing = function(req, res) {
  res.render('landing');
};

// show login form
exports.login = function(req, res) {
  res.render('login');
};

// handle login logic
exports.handleLogin = function(req, res) {
  res.redirect('/recipes');
};

// show register form
exports.register = function(req, res) {
  res.render('register');
};

// handle register logic
exports.handleRegister = function(req, res) {
  res.redirect('/recipes');
};