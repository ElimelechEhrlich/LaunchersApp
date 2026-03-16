import { ObjectId } from "bson";
import connection from "../db/nongoDb.js";

const db = connection.db('militery');
const launchers = db.collection('launchers');

export async function create(launcher) {
    const result = await launchers.insertOne(launcher)
    return result.insertedId
}

export async function getData() {
    const result = await launchers.find({}).toArray()
    return result
}

export async function getDataById(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    const result = await launchers.findOne({ _id: new ObjectId(id) });
    return result
}