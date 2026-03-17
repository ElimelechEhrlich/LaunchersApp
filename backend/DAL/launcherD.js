import { ObjectId } from "bson";
import connection from "../db/nongoDb.js";
import { boolean } from "webidl-conversions";
import { isAirForcePermitted } from "../services/usersS.js";
import { validateLauncherFieldsTypes } from "../services/launchersS.js";

const db = connection.db('militery');
const launchers = db.collection('launchers');

export async function createLauncher(launcher) {
    const result = await launchers.insertOne(launcher)
    return result.insertedId
}

export async function getAllLaunchers() {
    const result = await launchers.find({}).toArray()
    return result
}

export async function findLauncherById(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    const result = await launchers.findOne({ _id: new ObjectId(id) });
    return result
}

export async function updateLauncher(id, newData) {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId format');
    }
    const result = await launchers.updateOne({ _id: new ObjectId(id) }, { $set: newData });
    return result
}

