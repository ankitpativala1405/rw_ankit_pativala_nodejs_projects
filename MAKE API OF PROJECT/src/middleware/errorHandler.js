function notFoundHandler(req, res, next) {
	res.status(404).json({ error: 'Not Found' });
}

function errorHandler(err, req, res, next) {
	console.error('Error:', err);
	const status = err.status || 500;
	res.status(status).json({ error: err.message || 'Internal Server Error' });
}

module.exports = { errorHandler, notFoundHandler };