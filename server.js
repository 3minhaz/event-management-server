require('dotenv').config();
const express = require('express');
const bp = require('body-parser')
const cors = require('cors'); 
const connectDb = require('./config/DB');
const port = process.env.PORT || 5000;
const app = express()
//db connected
connectDb();
//import Custom Routes
const userRoutes = require('./routes/userRoutes');
//middleware
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
//api calling
app.use('/users',userRoutes)

app.get('/',(req,res) =>{
    res.send("server running")
})








app.listen(port,() =>{
    console.log(`listening on http://localhost:${port}`)
})