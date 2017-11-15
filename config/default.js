const PORT = process.env.PORT || 3000;
module.exports = {
	app: {
		name: 'todo-api',
		port: PORT,
		baseUrl: `http://localhost:${PORT}`,
	},
	api: {
		prefix: '/api',
		versions: [1],
	},
	lang: 'en',
	authToken: {
		superSecret: 'ipa-odot',
		expiresIn: 86400,
	},
	db: {
		url: 'mongodb://localhost:27017/todo',
	},
	itemsPerPage: {
		default: 10,
	},
};
