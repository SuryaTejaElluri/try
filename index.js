const express = require('express')
const PORT=3000

const app=express()

app.get('/' , function(request,response){
    response.send("Hello world");
})
app.get('/day', function(req,res){
    res.send("Today is Sunday");
})

app.listen(PORT ,function(){
    console.log("API Has Started")

})
