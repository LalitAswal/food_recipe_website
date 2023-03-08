let foodDetails = require('../models/foodDetails');



let foodDetail  =async(req, res)=>{
    try {
        
        let details = await foodDetails();
        return res.status(200).json(details)
    } catch (error) {
        res.status(500).json({"data": error})
    }

}


module.exports = foodDetail;