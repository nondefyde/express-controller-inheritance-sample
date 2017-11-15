import _ from 'underscore';
/**
 * The App Error class
 */
class AppError extends Error {
	/**
	 * @param {String} message The error message
	 * @param {Number} code The status code of the error
	 * @param {Object} messages The optional error messages
	 */
	constructor(message, code, messages = null) {
		super(message);
		this._code = code;
		if (messages) {
			this._messages = messages;
		}
		// Error.captureStackTrace(this, AppError);
	}

	/**
	 * @return {Number}
	 */
	get code() {
		return this._code;
	}

	/**
	 * @return {Array}
	 */
	get messages() {
		return this._messages;
	}

	/**
	 * @return {Object} The instance of AppError
	 */
	format() {
		let obj = {code: this._code, message: this.message};
		if (this.messages) {
			obj.messages = this.validationErrorsToArray(this._messages);
		}
		return obj;
	}


	/**
	 * @param {Object} error The error object
	 * @return {Object} The errors array
	 */
	validationErrorsToArray(error) {
		let errorsArray = [];
		if (!_.isEmpty(error)) {
			for (let prop in error) {
				if (error.hasOwnProperty(prop)) {
					_.forEach(error[prop], (errorMessage) => {
						errorsArray.push(errorMessage);
					});
				}
			}
		}
		return errorsArray;
	}
}

export default AppError;
