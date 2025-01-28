
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
export const Register = async(req,res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save()
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json(error)
    }
}

export const Login = async(req,res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("wrong credentails")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("wrong credentails")

        const{password, ...others} = user._doc
        res.status(200).json(others)

    }
    catch(error){
        res.status(500).json(error)
    }
    
}