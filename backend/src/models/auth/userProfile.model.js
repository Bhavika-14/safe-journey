const { Schema, model } = require('mongoose');

const userProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'userAuth',
        required: true,
	},
    displayName: {
        type: String,
        required: true,
    },
    onBoardingStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    userType: {
        type: String,
        required: true,
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Freelancer'],
        default: 'Full-Time'
    },
    department: {
		type: String,
        // required: true,
	},
    designation: {
		type: String,
        // required: true,
	},
    joiningDate: {
        type: Date,
        // required: true,
    },
    leavingDate: {
        type: Date,
    },
    picture: {
        type:String,
    },
    personalEmail: {
        type: String,
    },
    dob: {
        type: Date,
    },
    passportNo: {
        type: String,
    },
    address: {
        type: String,
    },
    emergencyContactNumber: {
        type: Number,
    },
    // country code to be added
    // emergencyContactName: {
    //     type: String,
    // },
    alternateContactNumber: {
        type: Number,
    },
    bloodGroup: {
        type: String,
    },
    religion: {
        type: String,
    },
    race: {
        type: String,
    },
    relationshipStatus: {
        type: String,        //why is this a boolean ?
    },
    workLocation: {
        type: String,
        // required: true,
        enum: ['Onsite', 'Office'],
        default: 'Onsite'
    },
    organization: {
        type: Schema.Types.ObjectId,
		ref: 'Org',
    },
    compensationLeaves: {
        type: Number,
        default: 0,
    },
    leaves: {
        sickLeaves: {
            yearlyLeaves: {
                type: Number,
                required: true,
                default: 20,
            },
            remainingLeaves: {
                type: Number,
                default: 10,
            },
        },
        annualLeaves: {
            yearlyLeaves: {
                type: Number,
                required: true,
                default: 20,
            },
            remainingLeaves: {
                type: Number,
                default: 20,
            },
        },
        hospitalizationLeaves: {
            yearlyLeaves: {
                type: Number,
                required: true,
                default: 20,
            },
            remainingLeaves: {
                type: Number,
                default: 5,
            },
        },
        childCareLeaves: {
            yearlyLeaves: {
                type: Number,
                required: true,
                default: 20,
            },
            remainingLeaves: {
                type: Number,
                default: 20,
            },
        },
        compassionateLeaves: {
            yearlyLeaves: {
                type: Number,
                required: true,
                default: 20,
            },
            remainingLeaves: {
                type: Number,
                default: 20,
            },
        }
    },
}, {
	timestamps: true,
});

module.exports = model('UserProfile', userProfileSchema);
