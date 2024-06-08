import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/*------------------------------------------------------------------------------------------------------ */
/*
    @Desc   Auth user & get TOken
    @route  POST api/users/auth
    @access Public
*/
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(401);
        throw new Error("Invalid Email or password")
    }
    // res.send('Auth User')
})

/*--------------------------------------------------------------------------------------------------- */
/*
    @Desc   Register User
    @route  POST api/users
    @access Public
*/
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('Invalid User Data')
    }
})

/*------------------------------------------------------------------------------------------ */
/*
    @Desc   Logout user/clear
    @route  POST api/users/logout
    @access private
*/
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'logged out Successfully!' })
})


/*--------------------------------------------------------------------------------------------- */
/*
    @Desc   get User Profile
    @route  GET api/users/profile
    @access public
*/
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('User Not Found');
    }
})

/*----------------------------------------------------------------------------------------------- */
/*
    @Desc   Update User Profile
    @route  PUT api/users/profile
    @access private
*/
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();

        res.status(201).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin
        });
    }
    else {
        res.status(404)
        throw new Error('User not found')
    }
})

/*---------------------------------------------------------------------------------------------- */
/*
    @Desc   Get Users
    @route  GET api/users
    @access private/admin
*/
const getUsers = asyncHandler(async (req, res) => {
    res.send('Get Users')
})

/*---------------------------------------------------------------------------------------------- */
/*
    @Desc   Get User
    @route  GET api/users/ess private/admin
*/
const getUsersById = asyncHandler(async (req, res) => {
    res.send('Get User by id')
})



/*------------------------------------------------------------------------------------------------ */
/*
    @Desc   Delete Users
    @route  DELETE api/users/ess private/admin
*/
const deleteUsers = asyncHandler(async (req, res) => {
    res.send('Deleting Users')
})



/*-------------------------------------------------------------------------------------------------- */
/*
    @Desc   Update User
    @route  PUT api/users/ess private/admin
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