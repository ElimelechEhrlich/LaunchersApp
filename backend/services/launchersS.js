export function validateLauncherFieldsTypes(launcher) {
    const { city, rocketType, latitude, longitude, name } = launcher
    return (typeof city === "string" && (rocketType.toLowerCase() === "shahab3" || rocketType.toLowerCase() === "fetah110" || rocketType.toLowerCase() === "radwan" || rocketType.toLowerCase() === "kheibar" && Number(latitude) !== NaN) && Number(longitude) !== NaN && typeof name === "string")
}