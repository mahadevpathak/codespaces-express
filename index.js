const express =require("express");
const app = express();

const bookRoutes =require('./src/book/book.routes')

app.use(express.json())
app.use('/api/v1/bookRoutes',bookRoutes)

app.get("/",(req,res)=>{
    res.json("Hello WE ARE HERE !")
})

app.listen(9000,()=>{
    console.log("Server running on port 9000 !")
})