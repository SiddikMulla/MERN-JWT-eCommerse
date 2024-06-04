import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

/*
    @Desc   Auth user & get TOken
    @route  POST api/users/login
    @access Public
*/
const authUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    res.send('Auth User')
})


/*
    @Desc   Register User
    @route  POST api/users
    @access Public
*/
const registerUser = asyncHandler(async (req, res) => {
    res.send('Registering User')
})


/*
    @Desc   Logout user/clear
    @route  POST api/users/logout
    @access private
*/
const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout User')
})

/*
    @Desc   get User Profile
    @route  GET api/users/profile
    @access public
*/
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user Profile')
})


/*
    @Desc   Update User Profile
    @route  PUT api/users/profile
    @access private
*/
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Update user Profile')
})


/*
    @Desc   Get Users
    @route  GET api/users
    @access private/admin
*/
const getUsers = asyncHandler(async (req, res) => {
    res.send('Get Users')
})


/*
    @Desc   Get User
    @route  GET api/users/:id
    @access private/admin
*/
const getUsersById = asyncHandler(async (req, res) => {
    res.send('Get User by id')
})


/*
    @Desc   Delete Users
    @route  DELETE api/users/:id
    @access private/admin
*/
const deleteUsers = asyncHandler(async (req, res) => {
    res.send('Deleting Users')
})

/*
    @Desc   Update User
    @route  PUT api/users/:id
    @access private/admin
*/
const updateUser = asyncHandler(async (req, res) => {
    res.send('Update User')
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUsersById,
    deleteUsers,
    updateUser
}