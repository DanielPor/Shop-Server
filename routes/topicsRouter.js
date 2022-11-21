import express from 'express'
import connection from '../configs/db.js'

const route = express.Router()

route.get('/', (req, res) => {
    connection.query('SELECT * FROM topics', (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result))
        } else res.send('err')
    })
})

export default route