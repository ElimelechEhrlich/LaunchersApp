import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
config()

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);    
})
