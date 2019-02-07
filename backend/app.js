import express from 'express'
const app = express()
app.get("/",(req,res)=>{
    res.send("succeful")
})

app.listen(8080,()=>{
    console.log("connection completed successfully")
})
var s = 1
let g = 2
