export function validateLauncherFieldsTypes(launcher) {
    const { city, rocketType, latitude, longitude, name, destroyed } = launcher
    if (destroyed !== "true" && destroyed !== "false")
    return ((!destroyed || destroyed === "true" || destroyed === "false") && typeof city === "string" && (rocketType.toLowerCase() === "shahab3" || rocketType.toLowerCase() === "fetah110" || rocketType.toLowerCase() === "radwan" || rocketType.toLowerCase() === "kheibar" && Number(latitude) !== NaN) && Number(longitude) !== NaN && typeof name === "string")
}

export async function validateUpdateRequest(id, newData, role) {
    if ((!ObjectId.isValid(id)) || !validateLauncherFieldsTypes(newData) || (newData.destroyed && !isAirForcePermitted(role))) return false
    const result = await launchers.updateOne({ _id: new ObjectId(id) }, { $set: {} })({ _id: new ObjectId(id) });
    return true
}