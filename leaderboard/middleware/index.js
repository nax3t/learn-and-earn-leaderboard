module.exports = {

	// Handle asynchronous functions in routes
	asyncErrorHandler: fn => (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	}

};