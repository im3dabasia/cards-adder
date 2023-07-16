const Position = require('../Models/Position');

const PositionController = {
    getAllPositions: async (req, res) => {
        try {
            // console.log("sending user positions")
            const position = await Position.find();
            res.json(position);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    },
    postPosition: async (req, res) => {
        try {
            const position = await Position.create(req.body);
            res.json({
                Message: "Position Added Successfully",
                Position: position
            });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}

module.exports = PositionController;
