import jwt from "jsonwebtoken";
import { createUser, getAllUsers, findUserById, updateUser, deleteUser, getUserByName, getUserByUserType } from "../DAL/usersD.js";
import { ObjectId } from "bson";
import { validateUserFieldsTypes } from "../services/usersS.js";


export async function getUsers(req, res) {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

export async function getUserloggedIn(req, res) {
    try {
        res.json(req.user)
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}



export async function getUserById(req, res) {
    try {
        const user = await findUserById(req.params.id)
        if (user) res.json(user)
        else res.status(404).json({ message: 'user not found.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

export async function addUser(req, res) {
    try {
        if (req.body.username && req.body.password && req.body.email && req.body.user_type) {
            const { username, password, email, user_type } = req.body
            const newUser = { username, password, email, user_type }
            if (validateUserFieldsTypes(newUser)) {
                if (!getUserByUserType(user_type)) return res.status(403).json({ message: "a user of this type already exists." })
                const userId = await createUser(newUser)
                res.status(201).res.json({ message: `launcher created with id: ${userId}` })
            } else res.status(400).json({ message: 'invalid fields.' })
        } else res.status(400).json({ message: 'missing fields.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

export async function editUser(req, res) {
    try {
        const user = await updateUser(req.body.id, req.body)
        if (user) res.json(user)
        else res.status(404).json({ message: 'user not found.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

// const result = await launchers.updateOne({ _id: new ObjectId(id) }, { $set: {} })({ _id: new ObjectId(id) });


export async function removeUser(req, res) {
    try {
        const result = await deleteUser(req.params.id)
        if (result) res.json(result)
        else res.status(404).json({ message: 'user not found.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}
export async function userLogin(req, res) {
    const { username, password } = req.body
    const user = await getUserByName(username, password)
    try {
        if (!user) return res.status(400).json({ message: "user is not exists." })
        const token = jwt.sign({ _id: new ObjectId(user.id), username: user.username, email: user.email, user_type: user.user_type }, process.env.JWT_SECRET_KEY)
        const date = new Date()
        await updateUser(user._id, { login_last: date })
        return res.status(201).json({ token })
    } catch (error) {
        console.error({ error });
        return res.status(500).json()
    }
}

