const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const Package = require('../models/packageModel');
//creating package
const createPackage = asyncHandler(async(req,res) =>{
    console.log(req.user._id)
    const {package_name,price,image_link,description,categories,email} = req.body;
    if(!email){
        res.status(401);
        throw new Error("User not Autorized!");
    }
    if (!package_name || !price || !image_link || !description || !categories) {
        res.status(400);
        throw new Error("Please Fill all Feilds");
    }else {
        const package = new Package({ package_name,price, user:req.user._id, image_link, description,categories });
        const user = await User.findOne({email:req.body.email})
        if (user) {
            const createdPackage = await package.save();
            res.status(200).json(createdPackage);
        } else {
            res.status(401)
            throw new Error('page created permission denied');
        }
    }
});

//geting packages
const getPackages = asyncHandler(async (req, res) =>{
    const packages = await Package.find({ user: req.user._id });
    if(packages){
        res.json(packages)
    }else{
        res.json({"message":"package not found"})
    }
})

module.exports ={ createPackage,getPackages};