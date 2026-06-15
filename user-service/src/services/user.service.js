import User from "../models/user.model.js";
import { hashPassword } from "../utils/bcrypt.util.js";

export async function findUserByEmail(email) {
    return await User.findOne({email});
}

export async function getUsers() {
    return await User.find();
}

export async function getUserById(userId) {
    return await User.findById(userId).select('name email');
}

export async function addUser(user) {
    user.password = await hashPassword(user.password);
    return await User.create(user);
}