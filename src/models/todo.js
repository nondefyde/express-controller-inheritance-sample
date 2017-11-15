import mongoose from 'mongoose';
import Validator from 'validatorjs';

/**
 * Todo Schema
 */
const TodoSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
}, {
	timestamps: true,
});

/**
 * @param {Object} obj The object to perform validation on
 * @return {Validator} The validator object with the specified rules.
 */
TodoSchema.statics.validateCreate = (obj) => {
	let rules = {
		name: 'required',
		description: 'required',
	};
	return new Validator(obj, rules);
};

/**
 * @typedef TodoSchema
 */
export default mongoose.model('Todo', TodoSchema);
