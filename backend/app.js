import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connection from './db/nongoDb.js'
import launchersRouter from './routers/launchersR.js'
config()

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())


app.use('/api/launchers', launchersRouter)



app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})

connection.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch(error => console.error('Connection error:', error))
