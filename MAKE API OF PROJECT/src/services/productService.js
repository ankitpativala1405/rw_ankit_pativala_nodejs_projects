const { randomUUID } = require('crypto');

const productStore = new Map();

async function getAllProducts() {
	return Array.from(productStore.values());
}

async function getProductById(id) {
	return productStore.get(String(id)) || null;
}

async function createProduct(data) {
	const id = randomUUID();
	const product = {
		id,
		name: data.name || 'Unnamed Product',
		price: typeof data.price === 'number' ? data.price : 0,
	};
	productStore.set(id, product);
	return product;
}

async function updateProduct(id, data) {
	const existing = productStore.get(String(id));
	if (!existing) return null;
	const updated = { ...existing, ...data, id: existing.id };
	productStore.set(existing.id, updated);
	return updated;
}

async function deleteProduct(id) {
	return productStore.delete(String(id));
}

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};