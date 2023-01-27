const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { login, email, password } = req.body
    if (!login || !email || !password) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const userExists = await User.findOne({ login })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const emailExists = await User.findOne({ email })
    if (emailExists) {
        res.status(400)
        throw new Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        login,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            message: 'User successfully created'
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            login: user.login,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password')
    }
})

const getMe = asyncHandler(async (req, res) => {
    const { _id, login, email } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        login,
        email
    })

})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = { registerUser, loginUser, getMe }