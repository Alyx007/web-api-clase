const dbService = require('../config/db.js')

module.exports = {
    getAllDest : () => {
        
        sql = 'SELECT * FROM destinations'
        return dbService.querypromise(sql)
    },
    getDestination : (id) => {

        sql = ` SELECT destination_name, country, description 
                FROM destinations
                WHERE destination_id=${id}`

        return dbService.querypromise(sql)
    },
    addDestination : (body) => {

        const {destination_name} = body
        const {country} = body
        const {description} = body

        sql = ` INSERT INTO destinations(destination_name, country, description) 
                VALUES('${destination_name}, ${country}, ${description})
                RETURNING *
                `

        return dbService.querypromise(sql)
    },
    updateDest : (id, body) => {

        const {email} = body

        sql = ` UPDATE usuario 
                SET email = '${email}' 
                WHERE destination_id = ${id}
                RETURNING *
                `

        return dbService.querypromise(sql)
    }
}