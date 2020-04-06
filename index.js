const express = require("express")

const server = express()

//middleware
server.use(express.json()); //teaches the server to parse JSON from the body

let users = [
    {
        id:1,
        name: "Alan Parker"
    },

    {
        id:2,
        name: "Lesly Alvarenga"
    }
]

//endpoints
server.get('/', (req, res) => {
    res.json({ api: 'running.....'})
})

server.get("/api/users", (req, res) => {
    res.json(users)
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


const port = 5000;
server.listen(port, () => console.log(`api is running on port ${port}`))