const { Schema, model } = require('mongoose');

const tokenSchema = new Schema({
	user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    expireAt: { type: Date, default: Date.now, index: { expires: 86400000 } }
}, {
	timestamps: true,
});

module.exports = model('Token', tokenSchema);
