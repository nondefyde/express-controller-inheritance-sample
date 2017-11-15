import AppController from '../controllers/app';
/**
 * The App controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
class TodoController extends AppController {
	/**
	 * @param {Model} model The default model object
	 * for the controller. Will be required to create
	 * an instance of the controller
	 */
	constructor(model) {
		super(model);
	}
	/**
	 * @param {Object} req The request object
	 * @param {Object} res The response object
	 * @param {function} next The callback to the next program handler
	 * @return {Object} res The response object
	 */
	create(req, res, next) {
		return res.status(200).json('i have been overridden');
	}
}

export default TodoController;
