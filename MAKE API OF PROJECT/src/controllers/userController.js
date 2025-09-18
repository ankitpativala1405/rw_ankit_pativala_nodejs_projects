const userService = require('../services/userService');

async function getUsers(req, res, next) {
	try {
		const users = await userService.getAllUsers();
		res.json(users);
	} catch (err) {
		next(err);
	}
}

async function getUserById(req, res, next) {
	try {
		const user = await userService.getUserById(req.params.id);
		if (!user) return res.status(404).json({ error: 'User not found' });
		res.json(user);
	} catch (err) {
		next(err);
	}
}

async function createUser(req, res, next) {
	try {
		const created = await userService.createUser(req.body);
		res.status(201).json(created);
	} catch (err) {
		next(err);
	}
}

async function updateUser(req, res, next) {
	try {
		const updated = await userService.updateUser(req.params.id, req.body);
		if (!updated) return res.status(404).json({ error: 'User not found' });
		res.json(updated);
	} catch (err) {
		next(err);
	}
}

async function deleteUser(req, res, next) {
	try {
		const deleted = await userService.deleteUser(req.params.id);
		if (!deleted) return res.status(404).json({ error: 'User not found' });
		res.status(204).send();
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};