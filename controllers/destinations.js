const DestServices = require('../services/destinations.js')

module.exports = {

    getAllDest : async (req, res, next) => {
        try {
            const destinations = await DestServices.getAllDest();
            res.json({destinations})
        } catch(err) {
            res.json({"message": `Error while retrieving data. Err: ${err}`})
        }
       
    }
}