const User = require('../Models/User');

const UserController = {

    getAllUsers: async (req, res) => {
        // console.log("new sending users")
        const allusers = await User.find({}).populate("position");

        res.json(allusers)

    }
}

module.exports = UserController;
