const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

require('dotenv').config()

let blogs_list = [
    {
        id: 1,
        title: "Introduction to NODE JS",
        content : "A supernova is one of the most beautiful sights in the universe. They can unleash the same amount of energy during the explosion as our Sun will during its entire 10 billion year lifespan!",
        author: "Albert Einstein ",
        likes: 1000,
        views: 1500,
        created_date: "2010-01-01"
    },
    {
        id: 2,
        title: "Express JS - How it works",
        content: "Bruno was one of the first to see the stars in the night sky and imagine alien sunsets, not superstitions. For his critical thinking, however, he was accused of heresy. Bruno died the laughing stock of the fledgling scientific world, and it would take many more decades until we slowly began to discover the truth laid out by this incredible man.  " ,
        author: "Caitlin Hauxwell",
        likes: 199,
        views: 299,
        created_date: "2012-07-02"
    }

]
app.get('/',(req,res)=>{
    res.json({
        message: "Welcome to ASTRO API "
    })

})


app.get('/blogs',(req,res)=>{
    res.json(blogs_list)
})

app.get('/blogs/:id', (req, res) => {
    let id = req.params.id

    let blog_found = false

    for(let blog of blogs_list) {

        if(blog['id'] == id) {
            blog_found = true
            res.json(blog)
            break
        }

    }

    if(blog_found == false) {
        res.json({
            message: "No blog found with id:"+id
        })
    }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.post('/blog', (req, res) => {
    let data = req.body


    let new_record = {
        id: blogs_list.length + 1,
        /*content: data.content,
        author: data.author,
        likes: data.likes,
        views: data.views,*/
        created_date: new Date()
    }

    blogs_list.push(new_record)

    res.json({
        message: "Blog created successfully"
    })

})

app.post('/delblog/:id',(req,res)=> {
    let id = req.params.id
    for(delpost of blogs_list)
    {
        if (delpost['id']==id)
        {
            blogs_list.pop(id)
        }
    }
    res.json({
        message: "Blog Deleted Successfully"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

