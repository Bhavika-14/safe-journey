const Employee = require('../../models/auth/userAuth.model');
const EmployeeProfile = require('../../models/auth/userProfile.model');


const createProfile = async ({employee_id, onBoardingStatus, department, designation, joiningDate, leavingDate, personalEmail, dob, passportNo, address, emergencyContactNumber, alternateContactNumber, bloodGroup, religion, race, relationshipStatus, organization }) => {
	let response = {
        status: 0,
        message: "",
    };
	try {
		const existingProfile = await EmployeeProfile.find({ user: employee_id });
		const userAuth = await Employee.find({ _id: employee_id });
		if (existingProfile.length >= 1) {
			response.status = 409;
			response.message = "The profile for this user already exists!";
		} else {
			const profile = new EmployeeProfile({
				user: employee_id,
				onBoardingStatus: onBoardingStatus,
				department: department,
				designation: designation,
				joiningDate: joiningDate,
				// leavingDate: leavingDate,
				// picture: picture,
				workLocation: workLocation,
				personalEmail: personalEmail,
				dob: dob,
				passportNo: passportNo,
				address: address,
				emergencyContactNumber: emergencyContactNumber,
				alternateContactNumber: alternateContactNumber,
				bloodGroup: bloodGroup,
				religion: religion,
				race: race,
				relationshipStatus: relationshipStatus,
				organization: organization,
				// leaves to be added in this model, 
				// its added in userAuth for now.
			})
			await profile.save()
			response.status = 200;
			response.message = "Profile Created Successfully";
		}
	} catch (err) {
		response.status = 400;
		response.message = `Handling POST requests to /createProfile - Failed ${err.message}`;
	}
	return response;
}

const getUserProfile = async ({employee}) => {
	let response = {
        status: 0,
        message: "",
    };
	try {
		if (employee) {
			response.status = 200;
			response.message = employee;
		} else {
			response.status = 404;
			response.message = "The profile for this user doesn't exist!"
		} 
	} catch (err) {
		response.status = 400;
		response.message = `Handling GET requests to /get User Profile - Failed ${err.message}`;
	}
	return response;
}

//ask which fields to be updated .., can be updated 
const updateUserProfile = async ({employee, onBoardingStatus, department, designation, joiningDate, leavingDate, personalEmail, dob, passportNo, address, emergencyContactNumber, alternateContactNumber, bloodGroup, religion, race, relationshipStatus }) => {
	let response = {
        status: 0,
        message: "",
    };

	try {
		const user = await EmployeeProfile.find({ user: employee._id })
		if (user.length == 0) {
			response.status = 404;
			response.message = "No such User Profile exists!"
		} else {
			const updatedUserProfile = await EmployeeProfile.findByIdAndUpdate(user[0]._id, {
				$set: { 
				// user: employee._id,
				onBoardingStatus: onBoardingStatus,
				department: department,
				designation: designation,
				joiningDate: joiningDate,
				leavingDate: leavingDate,
				// picture: picture,
				personalEmail: personalEmail,
				dob: dob,
				passportNo: passportNo,
				address: address,
				emergencyContactNumber: emergencyContactNumber,
				alternateContactNumber: alternateContactNumber,
				bloodGroup: bloodGroup,
				religion: religion,
				race: race,
				relationshipStatus: relationshipStatus,
				},
			}, { new: true })
			response.status = 200;
			response.message = updatedUserProfile;
		}
	} catch (err) {
		response.status = 400;
		response.message = `Handling PUT requests to /update User Profile - Failed ${err.message}`;
	}
	return response;
}

const getAllUsers = async ({employee}) => {
	let response = {
        status: 0,
        message: "",
    };
	try {
		const users = await EmployeeProfile.find({ organization: employee.organization }).select("displayName department designation")
		response.status = 200;
		response.message = users;
	} catch (err) {
		response.status = 400;
		response.message = `Handling GET requests to /get User Profile - Failed ${err.message}`;
	}
	return response;
}


module.exports = { createProfile, getUserProfile, updateUserProfile, getAllUsers };