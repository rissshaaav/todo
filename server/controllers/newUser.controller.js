const User = require('../models/user.model.js');

const newUser = async(req, res)=> {
    try {
        const {username, password} = req.body;
        if(!(username && password)){
            return res.status(401).json({message: "all fields are mandatory"});
        }

        const user = new User({username, password});
        const savedUser = await user.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "internal server error"})
    }
}

module.exports = newUser;