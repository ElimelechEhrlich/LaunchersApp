import { ObjectId } from "bson";
import connection from "../db/nongoDb.js";

const db = connection.db('militery');
const users = db.collection('users');

export async function createUser(newUser) {
    newUser.login_last = null
    const result = await users.insertOne(newUser)
    return result.insertedId
}

export async function getAllUsers() {
    const result = await users.find({}).toArray()
    return result
}

export async function findUserById(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    const result = await users.findOne({ _id: new ObjectId(id) });
    return result
}

export async function getUserByName(name, password) {
    const result = await users.findOne({ username: name, password: password });
    return result
}

export async function getUserByUserType(userType) {
    const result = await users.findOne({ user_type:  userType });
    return result
}

export async function updateUser(id, newData) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    const result = await users.updateOne({ _id: new ObjectId(id) }, { $set: newData });
    return result
}

export async function deleteUser(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    const result = await users.deleteOne({ _id: new ObjectId(id)});
    return result
}