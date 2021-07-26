const db = require("../models")

const ROLES = db.ROLES
const User = db.user

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user)=>{
        if(err){
            res.status(500).send({message: err})
            return;
        }

        if(user){
            res.status(400).send({message: "Failed! Username is already in use!"})
            return;
        }

        User.findOne({
            email: req.body.email
        }).exec((err, user)=>{
            if(err){
                res.status(500).send({message: err})
                return;
            }

            if(user){
                res.status(400).send({message: "Failed! Email is already in use!"})
                return;
            }
                    console.log('hi')
            next();
        })
    })
}

checkRolesExisted = (req, res, next) => {
    console.log(ROLES);
    console.log('body-', req)
    if(!ROLES.includes(req.body.role)){
        res.status(400).send({message: `Failed! Role ${req.body.role} does not exist!`})
        return;
    }
    next();
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
}

module.exports = verifySignUp