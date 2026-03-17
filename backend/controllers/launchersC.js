import { createLauncher, getAllLaunchers, findLauncherById, updateLauncher } from "../DAL/launcherD.js";
import { validateLauncherFieldsTypes, validateUpdateRequest } from "../services/launchersS.js";

export async function getLaunchers(req, res) {
    try {
        const launchers = await getAllLaunchers()
        res.json(launchers)
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}
export async function getLauncherById(req, res) {
    try {
        const launcher = await findLauncherById(req.params.id)
        if (launcher) res.json(launcher)
        else res.status(404).json({ message: 'launcher not found.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

export async function editLauncher(req, res) {
    const payload = req.user
    if (!payload || !validateUpdateRequest(req.body.id, req.body, payload.role)) return res.status(401).json({ message: "authentication failed." })
    try {
        const updatedLauncher = await updateLauncher(req.body.id, req.body)
        if (updatedLauncher) res.json(updatedLauncher)
        else res.status(404).json({ message: 'launcher not found.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

// const result = await launchers.updateOne({ _id: new ObjectId(id) }, { $set: {} })({ _id: new ObjectId(id) });

export async function addLauncher(req, res) {
    try {
        if (req.body.city && req.body.rocketType && req.body.latitude && req.body.longitude && req.body.name) {
            const { city, rocketType, latitude, longitude, name } = req.body
            const newLauncher = { city, rocketType, latitude, longitude, name }
            if (validateLauncherFieldsTypes(newLauncher)) {
                const launcherId = await createLauncher(newLauncher)
                res.json({ message: `launcher created with id: ${launcherId}` })
            } else res.status(400).json({ message: 'invalid fields.' })
        } else res.status(400).json({ message: 'missing fields.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}