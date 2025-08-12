const foodDetails = require('../models/foodDetails');

let foodDetail = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit) || 10;
        let offset = parseInt(req.query.offset) || 0;

        if (limit > 50) limit = 50;

        const result = await foodDetails(limit, offset);

        if (!result.success) {
            return res.status(500).json({ message: result.message });
        }

        return res.status(200).json(result);

    } catch (error) {
        console.error("Error in foodDetail controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = foodDetail;
