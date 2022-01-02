const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    // console.log(req.body)
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error('User already exists!');
    }
    const user = await User.create({
        name,
        email,
        password,
        pic
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Error Occured!')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user)
   if(user&& (await user.matchPassword(password))){
    //    console.log('password matched')
   };
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Email or Password!')
    }

})
module.exports = { registerUser, loginUser };