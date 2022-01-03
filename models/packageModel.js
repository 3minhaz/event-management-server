const mongoose = require('mongoose');
const packageSchema = mongoose.Schema({
    package_name: {
        type: String,
        required: true
    },
    image_link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
},
    {
        timestamps:true,
    }

)

const Packages = mongoose.model('Packages',packageSchema)
module.exports = Packages;
//{package_name: 'dsf', image-link: 'sd', description: 'dfds', price: 'dfs', categories: 'photography'}