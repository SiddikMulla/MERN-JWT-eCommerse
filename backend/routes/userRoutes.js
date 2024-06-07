import express from 'express';
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    getUserProfile,
    getUsers,
    getUsersById,
    deleteUsers,
    updateUser
} from '../controller/userController.js'

import { protectRoutes, admin } from '../middleware/authMiddleware.js';

router.route("/").post(registerUser).get(getUsers);

router.post("/logout", logoutUser);

router.post("/login", authUser);

router.route("/profile").get(getUserProfile).put(updateUserProfile);

router.route("/:id").get(getUsersById).delete(deleteUsers).put(updateUser);


export default router;