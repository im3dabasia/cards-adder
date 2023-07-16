const User = require('../Models/User');

const UserController = {

    getAllUsers: async (req, res) => {
        // console.log("new sending users")

        try {
            const allusers = await User.find({}).populate("position");
            res.json(allusers)

        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    },
    postNewUser: async (req, res) => {
        // console.log("making new user")
        try {

            const newUser = new User({
                firstName: req.body.username,
                lastName: req.body.password,
                email: req.body.email,
                startDate: req.body.startDate,
                position: req.body.position
            });
            newUser.save()

            res.json({
                Message: "User Added Successfully",
                Position: newUser
            });

        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }

    },
    removeUser: async (req, res) => {
        const { id } = req.params
        console.log(id)

        try {
            const user = await User.findByIdAndDelete(id);
            res.json({
                Message: "User Deleted Successfully",
                Position: user
            });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}

module.exports = UserController;
