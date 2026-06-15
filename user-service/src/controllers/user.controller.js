import { addUser, getUserById, getUsers } from "../services/user.service.js";

export async function getAllUsers(req,res,next) {
    const users = await getUsers();
    return res.status(200).json(users);
}

export async function getUser(req,res,next){
    const user = await getUserById(req.user.userId);
    return res.status(200).json(user);
}

export async function createUser(req,res,next) {
    const user = await addUser(req.body);
    return res.status(200).json(user);
}