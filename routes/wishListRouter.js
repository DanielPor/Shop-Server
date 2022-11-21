import express from 'express'
import connection from '../configs/db.js'

const route = express.Router()

route.get('/', (req, res) => {
    connection.query('SELECT * FROM wishList', (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result))
        } else res.send(err)
    })
})

route.post('/', (req, res) => {
    const { name, price, image, color } = req.body
    connection.query('INSERT INTO wishlist(name, price, image, color)VALUES(?,?,?,?)', [name, price, image, color], (err, result) => {
        if (!err) {
            res.send('product has been added into wish-list')
        } else res.send(err)
    })
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    connection.query('DELETE FROM wishList WHERE id=?', [id], (err, result) => {
        if (!err) {
            res.send('product has been deleted from wish-list')
        }
    })
})

export default route