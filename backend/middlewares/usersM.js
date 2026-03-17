import jwt from "jsonwebtoken"
import { isAdminPermitted, isAirForcePermitted, isIntelligenceCorpsPermitted } from '../services/usersS.js'

export function authUser(req, res, next) {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ message: "authentication failed, token not received." })
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = verified
        next()
    } catch (error) {
        return res.status(401).json({ message: "authentication failed, invalid token." })
    }
}

export function intelligenceCorpsAuth(req, res, next) {
    const payload = req.user
    console.log(payload);
    try {
        if (!isIntelligenceCorpsPermitted(payload.user_type)) return res.status(401).json({ message: "authentication failed, Incompatible permission." })
        next()
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export function airForceAuth(req, res, next) {
    const payload = req.user
    console.log(payload);
    try {
        if (!isAirForcePermitted(payload.role)) return res.status(401).json({ message: "authentication failed, Incompatible permission." })
        next()
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export function adminAuth(req, res, next) {
    const payload = req.user
    console.log(payload);
    try {
        if (!isAdminPermitted(payload.role)) return res.status(401).json({ message: "authentication failed, Incompatible permission." })
        next()
    } catch (error) {
        return res.status(500).json({ error })
    }
}
