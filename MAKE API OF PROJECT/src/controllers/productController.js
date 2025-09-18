const productService = require('../services/productService');

async function getProducts(req, res, next) {
	try {
		const products = await productService.getAllProducts();
		res.json(products);
	} catch (err) {
		next(err);
	}
}

async function getProductById(req, res, next) {
	try {
		const product = await productService.getProductById(req.params.id);
		if (!product) return res.status(404).json({ error: 'Product not found' });
		res.json(product);
	} catch (err) {
		next(err);
	}
}

async function createProduct(req, res, next) {
	try {
		const created = await productService.createProduct(req.body);
		res.status(201).json(created);
	} catch (err) {
		next(err);
	}
}

async function updateProduct(req, res, next) {
	try {
		const updated = await productService.updateProduct(req.params.id, req.body);
		if (!updated) return res.status(404).json({ error: 'Product not found' });
		res.json(updated);
	} catch (err) {
		next(err);
	}
}

async function deleteProduct(req, res, next) {
	try {
		const deleted = await productService.deleteProduct(req.params.id);
		if (!deleted) return res.status(404).json({ error: 'Product not found' });
		res.status(204).send();
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};