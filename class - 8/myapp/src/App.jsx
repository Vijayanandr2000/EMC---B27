import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'

function App() {

  const[count, setCount] = useState(0)

  useEffect(()=> {
    console.log('useEffect called', count)
  },[count])



  return (
    <>
      {/* <h1>Vijay - {count}</h1>
      <button
      onClick={() => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
      }}
      >
        Click me
      </button> */}
      <Form/>
    </>
  )
}

export default App
