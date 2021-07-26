const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const db = require("../models")
const User = db.user
const Role = db.role
const secret = process.env.SECRET


exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })

    user.save((err, user)=>{
        if(err){
            return res.status(500).send({message: err})
        }

        Role.findOne({
            name: req.body.role
        }).exec((err, role)=>{
            if(err){
                return res.status(500).send({message: err})
            }

            user.role = role._id;

            user.save(err=>{
                if(err){
                    return res.status(500).send({message: err})
                }

                return res.status(200).send({message: "User was registered  successfully!"})
            })
        })
    })
}


exports.signin = (req, res) =>{
    User.findOne({
        username: req.body.username
    })
    .populate("role")
    .exec((err, user)=>{
        if(err){
            return res.status(500).send({message: err})
        }

        if(!user){
            return res.status(404).send({message: "User Not Found."})
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if(!passwordIsValid){
            return res.status(401).send({
                message: "Invalid Password!",
                accessToken: null
            })
        }

        var token = jwt.sign({id: user.id}, secret, {
            expiresIn: 86400
        })

        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            accessToken: token
        })
    })
}