import AppError from '../classes/app-error';
/**
 * The App controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
class AppController {
	/**
	 * @param {Model} model The default model object
	 * for the controller. Will be required to create
	 * an instance of the controller
	 */
	constructor(model) {
		if (new.target === AppController) {
			throw new TypeError('Cannot construct Abstract instances directly');
		}
		this._model = model;
		this.create = this.create.bind(this);
	}
	/**
	 * @param {Object} req The request object
	 * @param {Object} res The response object
	 * @param {function} next The callback to the next program handler
	 * @return {Object} res The response object
	 */
	create(req, res, next) {
		let obj = req.body;
		const validator = this._model.validateCreate(obj);
		if (validator.passes()) {
			let object = new this._model(obj);
			object.save()
				.then((savedObject) => {
					return res.status(200).json(savedObject);
				}, (err) => {
					return next(err);
				});
		} else {
			return res.status(400).json(validator.errors.all());
		}
	}
}

export default AppController;
