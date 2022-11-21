import cartRouter from './routes/cartRouter.js'
import productsRouter from './routes/productsRouter.js'
import topicsRouter from './routes/topicsRouter.js'
import usersRouter from './routes/usersRouter.js'
import wishListRouter from './routes/wishListRouter.js'
import connection from './configs/db.js'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
connection.connect()
const port = process.env.PORT || 8001

app.use(cors())
app.use(bodyParser.json())
app.use('/cart', cartRouter)
app.use('/products', productsRouter)
app.use('/topics', topicsRouter)
app.use('/users', usersRouter)
app.use('/wishList', wishListRouter)

app.get('/', (req, res) => {
    res.send('hello worlds')
})


app.listen(port, () => console.log(`server is listening at http://localhost:${port}`))
