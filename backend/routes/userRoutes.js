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

import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").post(registerUser).get(protect, admin, getUsers);

router.post("/logout", logoutUser);

router.post("/auth", authUser);

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router.route("/:id")
    .get(protect, admin, getUsersById)
    .delete(protect, admin, deleteUsers)
    .put(protect, admin, updateUser);


export default router;