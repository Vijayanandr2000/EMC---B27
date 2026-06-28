import React, { useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/Global'

const Register = () => {
  const { setDatas } = useContext(GlobalContext)
  const navigate = useNavigate()

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [success, setSuccess] = React.useState("")
  const [err, setErr] = React.useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log("Register button clicked", {
      email, password
    })

    const newUser = {
      email,
      password
    }

    // setDatas(prev => [...prev, newUser])

   try {
     const res = await axios.post("https://emc-b27.onrender.com/register", newUser)

    console.log("Response from server", res)

    if(res.status === 200) {
      setSuccess(res.data.message)
      setErr("")
      alert("User registered successfully")
    }
  } catch (error) {
     console.log("Error from server", error)
      setErr(error.response.data.message)
   }

  }


  return (
    <div>
      <h1>Register</h1>
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap:"10px",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {err && <p style={{color: "red"}}>{err}</p>}
        {success && <p style={{color: "green"}}>{success}</p>}
        <button type="submit" onClick={handleRegister}>Register</button>
        <Link to="/" type="button" style={{
          background: "blue",
          color: "white",
          outline: "none",
          border: "none",
          padding: "10px",
          borderRadius: "10px"
        }}>Login</Link>
      </form>
    </div>
  )
}

export default Register
