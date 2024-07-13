const UserModel = require("../models/UserModel");
const bcryptjs = require("bcryptjs")

async function registerUser(req, res){
    try{
        const {name, email, password, profile_pic} = req.body;
        const checkEmail = await UserModel.findOne({email: email});
        if(checkEmail){
            return res.status(400).json({
                message: "Already user exists",
                error: true
            })
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const payload = new UserModel({
            name:name,
            email:email,
            password: hashPassword,
            profile_pic:profile_pic
        });

        const NewUser = await payload.save();
        return res.status(200).json({
            message: "User Created Successfully",
            data: NewUser,
            success: true
        })
    }catch(err){
        return res.status(500).json({
            message: err.message || err,
            error: true
        })
    }
}

module.exports = registerUser