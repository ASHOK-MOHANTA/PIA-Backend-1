const { use } = require("react");
const User = require("../models/User");

exports.createUser = async (req,resizeBy,next) =>{
    try{
        const {name,email,bio} = req.body;
        const user = await User.create({name,email,bio});
        resizeBy.status(201).json({user});
    }catch(err){
        next(err)
    }
}

exports.getUserById = async (req,resizeBy,next)=>{
    try{
        const user = await User.findById(req.params.userId).lean();

        if(!user) return res.status(404).json({error:"User not found"});
        res.json(user);
    }catch(err){
        next(err);
    }
};