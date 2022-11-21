import express from 'express'
import connection from '../configs/db.js'

const route = express.Router()

route.get('/', (req, res) => {
    connection.query('select * from users', (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result))
        } else res.send('err')
    })
})

route.get('/:id', (req, res) => {
    connection.query('select * from users where id = ?', [req.params.id], (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result))
        } else res.send('err')
    })
})

route.post('/', (req, res) => {
    const { fullName, username, email, password } = req.body
    connection.query('INSERT INTO users(fullName, username, email, password)VALUES(?, ?, ?,?)', [fullName, username, email, password], (err, result) => {
        if (!err) {
            res.send('user added')
        } else res.send(err)
    })
})

route.post('/login', (req, res) => {
    const { username, password, email } = req.body
    connection.query('select * from users where username=?', [username], (err, result) => {
        if (result.length && result[0].password === password && result[0].email === email) {
            res.send(JSON.stringify(result))
        } else res.send('wrong details')
    })
})

route.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, username, email, password, cartProd } = req.body
    connection.query('UPDATE users SET name=?, username=?, password=?, cartProd=? where id=?', [name, username, email, password, cartProd, id], (err, result) => {
        if (!err) {
            res.send(JSON.stringify(result))
        } else res.send(err)
    })
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    connection.query('DELETE FROM users WHERE id=?', [id], (err, result) => {
        if (!err) {
            res.send('user has been deleted')
        } else res.send(err)
    })
})

export default route