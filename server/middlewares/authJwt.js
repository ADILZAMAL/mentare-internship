const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const db = require('../models')

const User = db.user
const Role = db.role

verifyToken = (req, res, next)=>{
    let token = req.headers["x-access-token"]

    if(!token){
        return res.status(403).send({message: "No token provide!"})
    }

    jwt.verify(token, secret, (err, decoded)=>{
        if(err){
            return res.status(401).send({message: "Unauthorized!"})
        }

        req.userId = decoded.id;
        next();
    })
};

isVendor = (req, res, next) => {
    User.findById(req.userId).exec((err, user)=>{
        if(err){
            res.status(500).send({message: err})
        }


        Role.findOne({
            _id: user.role
        }).exec((err, role)=>{
            if(err){
                return res.status(500).send({message: err})
            }

            if(role === 'vendor' ){
                next();
                return;
            }
            
            res.status(403).send({message: "Requrie Vendor Role!"})
            return;

        })

    })
}

isAdvertiser = (req, res, next) => {
    User.findById(req.userId).exec((err, user)=>{
        if(err){
            return res.status(500).send({message: err})
        }

        Role.findOne({
            _id: user.role
        }).exec((err, role)=>{
            if(err){
                res.status(500).send({message: err})
            }

            if(role === "advertiser"){
                next();
                return;
            }
            return res.status(403).send({message: "Require Advertiser Role!"})
        })
    })
}

const authJwt = {
    verifyToken,
    isVendor,
    isAdvertiser
}

module.exports = authJwt