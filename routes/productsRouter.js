import express from 'express'
import connection from '../configs/db.js'

const route = express.Router()

route.get('/', (req, res) => {
    // if (req.query === 'undefined') {
    //     console.log(req.query);
    //     connection.query('SELECT * FROM products', (err, result) => {
    //         if (!err) {
    //             res.send(JSON.stringify(result))
    //         } else res.send(err)
    //     })
    // }
    if (req.query.category) {
        connection.query('SELECT * FROM products WHERE category = ?', [req.query.category], (err, result) => {
            if (!err) {
                res.send(JSON.stringify(result))
            } else res.send(err)
        })
    }
    if (req.query.name) {
        connection.query('SELECT * FROM products WHERE name = ?', [req.query.name], (err, result) => {
            if (!err) {
                res.send(JSON.stringify(result))
            } else res.send(err)
        })
    }
})


route.get('/:id', (req, res) => {
    connection.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result))
        } else res.send(err)
    })
})

//add image here 
// route.post('/', (req, res) => {
//     const { name, price, color, category } = req.body
//     connection.query('INSERT INTO products(name,price,color,category)VALUES(?,?,?,?)', [name, price, color, category], (err, result) => {
//         if (!err) {
//             res.send('user has been added')
//         } else res.send(err)
//     })
// })

// route.put('/:id', (req, res) => {
//     const { id } = req.params
//     const { name, price, color } = req.body
//     connection.query(`UPDATE products SET name=?, price=?,color=? WHERE id=?`, [name, price, color, id], (err, result) => {
//         if (!err) {
//             res.send('user has been updated')
//         } else res.send(err)
//     })
// })

// route.delete('/:id', (req, res) => {
//     const { id } = req.params
//     connection.query('DELETE FROM products WHERE id=?', [id], (err, result) => {
//         if (!err) {
//             res.send('user has been deleted')
//         } else res.send(err)
//     })
// })

export default route