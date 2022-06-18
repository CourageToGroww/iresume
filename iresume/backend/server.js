import express from 'express'
import cors from 'cors' //Cross-Origin Resource Sharing
import work_history from './api/work_history.route.js'

const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/work_history",work_history)
app.use('*',(req,res)=>{
    res.status(404).json({error: "not found"})
})

export default app