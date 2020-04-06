const express = require("express")

const server = express()

//middleware
server.use(express.json()); //teaches the server to parse JSON from the body

let users = [
    {
        id:1,
        name: "Alan Parker",
        bio: "21 year old Web Development student"
    },

    {
        id:2,
        name: "Lesly Alvarenga",
        bio: "20 year old Surgical Tech"
        
    }
]

//endpoints
server.get('/', (req, res) => {
    res.json({ api: 'running.....'})
})

server.get("/api/users", (req, res) => {
    res.json(users)

    if (user){
        res.status(200).json(user)
    }else {
        res.status(404).json({message: "User not found"})
    }
})

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    
    const user = users.find((user) => user.id == id)

    if (user){
        res.status(200).json(user)
    }else {
        res.status(404).json({message: "User not found"})
    }
    
})

server.post("/api/users", (req, res) => {
    const userInfo = req.body

    users.push(userInfo)
    res.status(201).json(users)
})


const port = 5000;
server.listen(port, () => console.log(`api is running on port ${port}`))