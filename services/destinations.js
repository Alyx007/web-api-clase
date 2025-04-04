const dbService = require('../config/db.js')

module.exports = {
    getAllDest : () => {
        
        sql = 'SELECT * FROM destinations'
        return dbService.querypromise(sql)
    }
}