module.exports = function(options) {
	// I could add options in future

	return function(err, req, res, next) {
		if (!err)
			return;

		res.status(err.status || 500);
		if (err.message || err.codes)
			res.send({ message: err.message, data: err.data });
		else
			res.send();
	};
}
