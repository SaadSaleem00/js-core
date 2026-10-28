const express=require('express')
const app=express()

app.use(express.json())

app.post('/echo', async(req,res)=>{
    const text=req.body.key
    if(typeof text!=='string' || text===''){
        return res.status(400).json({error:'text is required'})
    }
    res.json({got:text})
})


app.listen(3000,()=>console.log('server is hear at port 3000')
)