const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('./../models/userModel.js');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
    console.log("USER", user);
    done(null, user.id);
  }); //this will create a log of the user and serilize it; passport essentially stores information regarding this user object


  passport.deserializeUser(function(id, done){
    console.log("ID", id);
    UserModel.findById(id, function(err, user){
      done(err, user);
    })
  }); // this deserializes the user object after it has been serialized; unpacks it into a language that passport understands

  passport.use('local-signup',
  new LocalStrategy({
    usernameField: 'email', //if we were using username instead of email, this is where we would do so
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      UserModel.findOne({'email': email}, function(err, user){
        if (err) return res.send(err);
        if (user){
          if(user.validPassword(password)){
            console.log("Password correct. Log 'em in.");
            return res.send(null, user);
          } else {
            console.log("Password incorrect. Go fly a kite.");
            return res.send(null, false);
          }
        } else {
          var newUser = new UserModel(req.body);
          newUser.email = email;
          newUser.password = newUser.generateHash(password);
          newUser.save(function(err){
            if(err) res.send(err);
            return res.send(null, newUser);
          });
        }
      });
    });
  }));
};
