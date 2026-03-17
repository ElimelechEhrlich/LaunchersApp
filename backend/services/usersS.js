
export function validateUserFieldsTypes(user) {
    const { username, password, email, user_type } = user
    return (typeof username === "string" && Number(password) !== NaN && typeof email === "string" && typeof user_type === "string")
}

export function isIntelligenceCorpsPermitted(role) {
    return (role.toLowerCase() === 'intelligence' || role.toLowerCase() === 'air' || role.toLowerCase() === 'admin')
}
export function isAirForcePermitted(role) {
    return (role.toLowerCase() === 'air' || role.toLowerCase() === 'admin')
}
export function isAdminPermitted(role) {
    return (role.toLowerCase() === 'admin')
}



