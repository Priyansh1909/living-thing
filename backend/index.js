const express = require('express')
require('./mongoDB_conf')
const cors = require('cors')
const app = express()


const PORT = 8000

const get_Data = require('./routes/get_Data')

app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{

    await get_Data(req,res)

    })
    



app.listen(PORT,()=>{
    console.log("Server started at port:", PORT)
})