export function validateLauncherFieldsTypes(launcher) {
    const { city, rocketType, latitude, longitude, name } = launcher
    console.log(typeof city === "string" && (rocketType.toLowerCase() === "shahab3" || rocketType.toLowerCase() === "fetah110" || rocketType.toLowerCase() === "radwan" || rocketType.toLowerCase() === "kheibar") && Number(latitude) !== NaN && Number(longitude) !== NaN && typeof name === "string")
    console.log(city, rocketType.toLowerCase(), latitude, longitude, name);
    return (typeof city === "string" && (rocketType.toLowerCase() === "shahab3" || rocketType.toLowerCase() === "fetah110" || rocketType.toLowerCase() === "radwan" || rocketType.toLowerCase() === "kheibar" && Number(latitude) !== NaN) && Number(longitude) !== NaN && typeof name === "string")
}