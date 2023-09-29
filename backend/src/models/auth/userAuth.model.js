const { Schema, model } = require('mongoose');

const userAuthSchema = new Schema({
	email: {
		type: String,
        required: true,
        unique: true,
        lowercase: true,
	},
    firstName: {
		type: String,
        required: true,
	},
    lastName: {
		type: String,
        required: true,
	},
    contactNo: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        
    },
    verificationCode: {
        type: String,
        // required: true,
    },
    passwordResetCode: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    organization: {
        type: Schema.Types.ObjectId,
		ref: 'Org',
    },
    type: {
        type: String,
        default : "employee",
        required: true,
        enum: ['employee','hr', 'accountant'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
    },
    token: {
        type: String,
    }
}, {
	timestamps: true,
});

module.exports = model('UserAuth', userAuthSchema);
