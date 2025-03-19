const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');


const createUser = async (req, res) => {
    try {
        const { name, email, document } = req.body;

        if (!name || !email || !document) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const createdAt = new Date().toISOString()

        const user = new User({
            name,
            email,
            document,
            createdAt
        });

        await user.save();

        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await findUserById(id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await findUserById(id);
        await User.deleteOne(user);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const findUserById = async (id) => User.findById(id);

module.exports = { createUser, getAllUsers, getUserById, deleteUserById };
