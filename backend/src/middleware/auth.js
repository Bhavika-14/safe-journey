const jwt = require('jsonwebtoken');
// const employeeProfile = require('../models/auth/userProfile.model')
const Employee = require('../models/auth/userAuth.model')
const Profile = require('../models/auth/userProfile.model')

module.exports = async (req, res, next) => {
    if(req.headers.authorization) {
        try{
            const token = req.headers.authorization.split(" ")[1];
            const userData = jwt.verify(token, process.env.JWT_KEY);
            //jwt.verify checks if token is valid
            const employee = await Employee.find({_id: userData.userId});
            // console.log("line no 13")
            // console.log(employee)
            if (employee.length == 0) {
                return res.status(401).json({
                    message: 'Invalid employee'
                });
            }
            const userProfile = await Profile.findOne({user: employee[0]._id})

            req.body.employee = userProfile;
            next();
        } catch (error) {
            return res.status(401).json({
                message: `Auth Failed with error ${error}` 
            });
        }
    } else {
        return res.status(401).json({
            message: `Token not found` 
        });
    }
};
