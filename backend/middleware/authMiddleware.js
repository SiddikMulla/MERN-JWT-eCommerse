import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

const protectRoutes = asyncHandler(async (req, res, next) => {
    let token;

    //Reading JWT from the cookie
    token = req.cookie.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password')
            next();
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorised,Token Failed');

        }
    } else {
        res.status(401);
        throw new Error('Not authorised,Token not found')
    }
});