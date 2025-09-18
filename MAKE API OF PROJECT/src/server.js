const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const { logger } = require('./middleware/logger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
(require("dotenv")).config()
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});