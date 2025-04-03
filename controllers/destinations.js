
const pool = require()

module.exports = {
    getAllDest : (req, res, next) => {

        pool.query('SELECT * FROM destinations', (error, results) => {
            if (error)
            throw error
            destinations = results.rows
            res.json({destinations})
          })

    }
}