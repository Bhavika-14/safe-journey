const User = require('../../models/auth/userAuth.model');
const userProfile = require('../../models/auth/userProfile.model');
const Org = require('../../models/auth/organization.model')
const Token = require('../../models/auth/token.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { response } = require('express');


const createUser = async (email, password, firstName, lastName) => {
    let response = {
        status: 0,
        message: "",
    };
    let existingUser = await User.find({ email: email })
    if (existingUser.length >= 1) {
        response.status = 409;
        response.message = "Email already exists";
    } else {
        const hash = await bcrypt.hash(password, 10);
        if (!hash) {
            response.status = 400;
            response.message = "Hash password failed";
        } else {
            const user = new User({
                email: email,
                password: hash,
                firstName: firstName,
                lastName: lastName,
                isAdmin: false,
            });
            let newUser = await user.save()

            if (newUser) {
                response.status = 200;
                response.message = `Handling POST requests to /signup - Success`;
            }
            var token = new Token({ user: user._id, token: crypto.randomBytes(16).toString('hex') });
            await token.save()
            try {
                // Send email (use verified sender's email address & generated API_KEY on SendGrid)
                const transporter = await nodemailer.createTransport(
                    sendgridTransport({
                        auth: {
                            api_key: process.env.SENDGRID_APIKEY,
                        }
                    })
                )
                var mailOptions = { from: 'support@apric.in', to: user.email, subject: 'Account Verification Link', text: 'Hello ' + user.firstName + ',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + '\localhost:8000/auth/confirmation\/' + user.email + '\/' + token.token + '\n\nThank You!\n' };
                var mailSent = await transporter.sendMail(mailOptions);
                if (!mailSent) {
                    response.status = 500;
                    response.message = `Technical Issue!, Please click on resend for verify your Email.`;
                }
                else {
                    response.status = 200;
                    response.message = `A verification email has been sent to ' + ${user.email} + '. It will be expire after one day. If you not get verification Email click on resend token.`;
                }
            }
            catch (e) {
                response.status = 500;
                response.message = `Handling POST requests to /signup - Failed ${e}`;
            }
           
        }
    }
    return response;
}

const verifyEmail = async (token, email) => {
    let response = {
        status: 0,
        message: "",
    };
    await Token.findOne({ token: token })
        .then(async (token) => {
            if (!token) {
                response.status = 200;
                response.message = "Your verification link may have expired. Please click on resend for verify your Email.";
            }
            else {
                const user = await User.findOne({ _id: token.user })
                if (!user) {
                    response.status = 401,
                        response.message = "We were unable to find a user for this verification. Please SignUp!";
                }
                else if (user.verified == true) {
                    response.status = 200,
                        response.message = "User has been already verified. Please Login.";
                }
                else {
                    user.verified = true;
                    await User.updateOne({ _id: token.user }, { $set: { "verified": true } })
                        .exec()
                        .then(async () => {
                            response.status = 200,
                                response.message = "User has been verified. Please Login.";
                        })
                        .catch((err) => {
                            response.status = 500;
                            response.message = `Handling POST requests to /signup - Failed ${err}`;
                        });
                }
            }
        })
        .catch((err) => {
            response.status = 500;
            response.message = `Handling POST requests to /signup - Failed ${err}`;
        });
    return response;
}


const authenticateUser = async (email, password) => {
    let response = {
        //accepts status, message and token
    };
    let user = await User.findOne({ email: email, verified: true })
    if (!user) {
        response.status = 401,
            response.message = "We were unable to find a verified user for this email";
    }
    else {
        let result = await bcrypt.compare(password, user.password);
        if (!result) {
            response.status = 400;
            response.message = "Auth Failed 2";
        }
        else if (result) {
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id,
                    type: user.type,
                    firstName: user.firstName,
                    isAdmin: user.isAdmin,
                    org: user.organization,
                },
                process.env.JWT_KEY,
                {
                    expiresIn: '3d',
                }
            )
            response.status = 200;
            response.message = "Auth successfull";
            response.token = token;
        }
    }
    //Add a check in case user doesn't even exist
    return response;
}

const createOrg = async (email, name) => {
    let response = {
        status: 0,
        message: "",
    };
    let user = await User.findOne({ email: email })
    //checking org with the same name
    let existingOrg = await Org.findOne({ name: name })
    
    if (user) {
        if (user.organization){
            response.status = 200,
            response.message = `User already has an organization`;
        } else {
            const org = new Org({
                name: name,
                admin: user._id,
                isSubscribed: true,
            });
            const newOrg = await org.save()
            if (!newOrg) {
                response.status = 401,
                    response.message = "We were unable to create a new Org";
            }
            else {
                await User.updateOne({_id:user._id},
                    {$set: {
                        "organization" : newOrg._id,      
                    }});
                response.status = 200;
                response.message = "Organization succesfully created";
            }
        }
    } 
    else if (existingOrg) {
      response.status = 200,
      response.message = `Organization with this name already exists!`;
  }
    else {
        response.status = 401,
        response.message = "We were unable to find a user for this email";
    }
    return response;
}

const generateRandomPassword = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
};

const sendInvitationEmail = async (recipientEmail, firstName, password) => {
  try {
    const transporter = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key: process.env.SENDGRID_APIKEY,
        },
      })
    );

    const mailOptions = {
      from: 'support@apric.in',
      to: recipientEmail,
      subject: 'Invitation to Apric',
      text: `Hello ${firstName},\n\n` +
        'You have been invited to join Apric. Click the following link to access the dashboard:\n' +
        'https://platform.apric.in/auth\n\n' +
        'You can use the credentials below:\n' +
        `Id: ${recipientEmail}\n` +
        `Password: ${password}\n\n` +
        `Upon logging in, please change your password\n\n` +
        'Thank you!\n',
    };

    const mailSent = await transporter.sendMail(mailOptions);

    if (!mailSent) {
      return {
        status: 500,
        message: "Technical Issue! Unable to send invitation email.",
      };
    }

    return {
      status: 200,
      message: `Invitation email has been sent to ${recipientEmail}.`,
    };
  } catch (e) {
    return {
      status: 500,
      message: `Sending invitation email failed: ${e}`,
    };
  }
};

const inviteUser = async ({ employee, email, firstName, lastName }) => {
  try {
    const admin = employee;
    const existingUser = await User.findOne({ email });
    const existingUserProfile = await userProfile.findOne({ email });
    if (existingUser && existingUserProfile) {
      return {
        status: 409,
        message: "Email already exists",
      };
    }

    const password = generateRandomPassword();
    const hash = await bcrypt.hash(password, 10);

    if (!hash) {
      return {
        status: 400,
        message: "Hash password failed",
      };
    }

    let newUser;
    if (!existingUser) {
      newUser = new User({
        email,
        password: hash,
        organization: admin.organization,
        firstName,
        lastName,
        isAdmin: false,
        verified: true,
      });
      await newUser.save();
    }

    if (!existingUserProfile) {
      const newProfile = new userProfile({
        user: existingUser ? existingUser._id : newUser._id,
        organization: admin.organization,
        displayName: firstName,  
        // Add other relevant properties to the userProfile model
      });
      await newProfile.save();
    }

    const emailResult = await sendInvitationEmail(email, firstName, password);

    if (emailResult.status !== 200) {
      return emailResult;
    }

    return {
      status: 200,
      message: `Invitation email has been sent to ${email}.`,
    };
  } catch (e) {
    return {
      status: 500,
      message: `Handling POST requests to /inviteUser - Failed ${e}`,
    };
  }
};

module.exports = { createUser, authenticateUser, verifyEmail, createOrg, inviteUser };