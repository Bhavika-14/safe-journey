const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authInvite = require('../middleware/authInvite');
const controller = require('../controllers/auth.controller');

router.route('/register').post(controller.register);
router.route('/login').post(controller.login);
router.route('/confirmation/:email/:token').get(controller.confirmEmail);
router.route('/createorg').post(controller.createOrg);
router.route('/createprofile').post(controller.createProfile);
router.route('/getprofile').get(auth, controller.getProfile);
router.route('/updateprofile').put(auth, controller.updateProfile);
router.route('/inviteuser').post(authInvite, controller.inviteUser);

router.route('/allusers').get(auth, controller.getallusers);


module.exports = router;