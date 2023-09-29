const { Schema, model } = require('mongoose');

const orgSchema = new Schema({
    name: {
		type: String,
        required: true,
	},
    billingEmail: {
        type: String,
    },
    contactNo: {
        type: String,
    },
    admin: {
		type: Schema.Types.ObjectId,
		ref: 'userAuth',
	},
    isSubscribed: {
        type: Boolean,
        default: false,
    }
}, {
	timestamps: true,
});

module.exports = model('Org', orgSchema);
