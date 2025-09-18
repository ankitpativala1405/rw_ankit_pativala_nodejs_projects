const { randomUUID } = require('crypto');

const userStore = new Map();

async function getAllUsers() {
	return Array.from(userStore.values());
}

async function getUserById(id) {
	return userStore.get(String(id)) || null;
}

async function createUser(data) {
	const id = randomUUID();
	const user = { id, name: data.name || 'Unnamed', email: data.email || '' };
	userStore.set(id, user);
	return user;
}

async function updateUser(id, data) {
	const existing = userStore.get(String(id));
	if (!existing) return null;
	const updated = { ...existing, ...data, id: existing.id };
	userStore.set(existing.id, updated);
	return updated;
}

async function deleteUser(id) {
	return userStore.delete(String(id));
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};