const { userService , profileService } = require('../services');
const Token = require('../models/auth/token.model');
const { token } = require('morgan');


exports.register = async (req, res, next) => {
  try {
    let { firstName, lastName, email, password, confirmPassword} = req.body;
    if (!(firstName && lastName && email && password && confirmPassword)){
      throw Error("All fields are compulsory");
    }
    else if (!/^[a-zA-Z ]*$/.test(firstName)) {
      throw Error("Empty first name not allowed");
    }
    else if (!/^[a-zA-Z ]*$/.test(lastName)) {
      throw Error("Empty last name not allowed");
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      throw Error("Invalid email entered");
    }
    else if (password.length < 8 ) {
      throw Error("Password should be minimum 8 characters");
    }
    else if (!(password == confirmPassword)) {
      throw Error("Passwords don't match");
    }
    else {
      let response = await userService.createUser(email, password, firstName, lastName);
        if (response) {
        return res.status(response.status).json({
        message: response.message
          });
        }
    }
  } 
    catch (error) {
      res.status(400).send(error.message);
  }
};

exports.confirmEmail = async (req, res, next) => {
  let {email, token} = req.params;
  let response = await userService.verifyEmail(token, email);
  if (response) {
    return res.status(response.status).json({
      message: response.message
    });
  }
}

exports.login = async (req, res, next) => {
  try {
    let {email, password} = req.body;
    if (!(email && password)){
      throw Error("All fields are compulsory");
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      throw Error("Invalid email entered");
    }
    else if (password.length < 8 ) {
      throw Error("Password should be minimum 8 characters");
    }
    else {
      let response = await userService.authenticateUser(email, password);
        if (response) {
        return res.status(response.status).json({
        message: response.message,
        token: response.token
          });
        }
    }
  } 
    catch (error) {
      res.status(400).send(error.message);
  }
};

exports.createOrg = async (req, res, next) => {
  try {
      let {email, name} = req.body;
      let response = await userService.createOrg(email, name);
        if (response) {
        return res.status(response.status).json({
        message: response.message,
          });
        }
  } 
    catch (error) {
      res.status(400).send(error.message);
  }
};

exports.inviteUser = async (req, res) => {
  let response = await userService.inviteUser(req.body); 
  if (response) {
    return res.status(response.status).json({
      message: response.message
    });
  }
};

exports.createProfile = async (req, res) => {
  let response = await profileService.createProfile(req.body);
  if (response) {
    return res.status(response.status).json({
      message: response.message
    });
  }
};

//why arent we handling errors here, no else statement ? and try catch
exports.getProfile = async (req, res) => {
  let response = await profileService.getUserProfile(req.body);
  if (response) {
    return res.status(response.status).json({
      message: response.message
    });
  }
};

exports.updateProfile = async (req, res) => {
  let response = await profileService.updateUserProfile(req.body);
  if (response) {
    return res.status(response.status).json({
      message: response.message
    });
  }
};

exports.getallusers = async (req, res) => {
  let response = await profileService.getAllUsers(req.body);
  if (response) {
    return res.status(response.status).json({
      message: response.message
    });
  }
};

