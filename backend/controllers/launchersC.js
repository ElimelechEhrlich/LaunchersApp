import { create, getData, getDataById } from "../DAL/launcherD.js";
import { validateLauncherFieldsTypes } from "../services/launchersS.js";

export async function getLaunchers(req, res) {
    try {
        const launchers = await getData()
        res.json(launchers)
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}
export async function getLaunchersById(req, res) {
    try {
        const launcher = await getDataById(req.params.id)
        console.log(launcher);
        console.log(req.params.id);

        
        if (launcher) res.json(launcher)
        else res.status(404).json({message: 'launcher not found.'})
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}

export async function addLauncher(req, res) {
    try {
        if (req.body.city && req.body.rocketType && req.body.latitude && req.body.longitude && req.body.name) {
            const { city, rocketType, latitude, longitude, name } = req.body
            const newLauncher = { city, rocketType, latitude, longitude, name }
            if (validateLauncherFieldsTypes(newLauncher)) {
                const launcherId = await create(newLauncher)
                res.json({message: `launcher created with id: ${launcherId}`})
            } else res.status(400).json({ message: 'invalid fields.' })
        } else res.status(400).json({ message: 'missing fields.' })
    } catch (error) {
        console.error({ error });
        res.status(500).json()
    }
}