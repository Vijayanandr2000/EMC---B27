const express = require('express')
const app = require('express')()
const cors = require('cors')

app.use(cors())

app.use(express.json())

const PORT = 3000

const users = []

app.get("/", (req, res)=>{
  res.send("Hello World..! from vijay")
})

app.post("/register", (req, res)=>{
  const { email, password } = req.body

  const newUser = {
    email,
    password
  }

  const userExists = users.find(user => user.email === email)

  if(userExists) {
    return res.status(400).json({
      message: "User already exists"
    })
  }

  users.push(newUser)

  res.status(200).json({
    message: "User registered successfully",
    totalUsers: users.length
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
