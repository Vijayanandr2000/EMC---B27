import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/Global'

const Login = () => {
    const { datas } = useContext(GlobalContext)

  const [err, setErr] = React.useState("")

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Login button clicked", {
      email, password
    })

    const userInfo = datas.find(data => data.email === email)

    if(!userInfo) {
      setErr("User not found")
      return
    }

    if(userInfo.password !== password) {
      setErr("Password is incorrect")
      return
    }

    setErr("")
    alert("Login successful")
  }

  return (
    <div>
      <h1>Login</h1>
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap:"10px",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <input type="text" placeholder='UserName' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {err && <p style={{color: "red"}}>{err}</p>}
        <button type="submit" onClick={handleLogin}>Login</button>

        <Link to="/register" type="button" style={{
          background: "blue",
          color: "white",
          outline: "none",
          border: "none",
          padding: "10px",
          borderRadius: "10px"
        }}>Register</Link>
      </form>
    </div>
  )
}

export default Login
