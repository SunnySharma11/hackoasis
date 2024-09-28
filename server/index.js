require('dotenv').config()      // always in first line
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT;


const corsOptions = {
    origin:'http://localhost:5173',
    methods:['GET', 'POST', 'PUT', 'DELETE','PATCH'],    //else delete me problem
    allowedHeaders: ['Authorization', 'Content-Type'],
    Credential:true
    
}
app.use(cors(corsOptions))
app.use(express.json())       //just because of this we're getting internal server error

const router = require('./routes/AuthRouter')
app.use('/' , router)

const adminRouter = require('./routes/adminRouter')
app.use('/admin',adminRouter)

mongoose.connect('mongodb://localhost/Final')
.then( ()=>{console.log('connected mongoose')} )
.catch ( (error) =>{ console.log('error during connection',error)} )

const errorMiddleware = require('./middleware/Error')
app.use(errorMiddleware)


app.listen(PORT, () =>{
    console.log(`listening at http://localhost:${PORT}`)
})