import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrintName from './PrintName'
import Counter from './Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1>Vijay</h1> */}
    {/* PrintName() */}
    {/* <PrintName name="Vijay"></PrintName>
    <PrintName name="Anand"></PrintName>
    <PrintName name="Divya"></PrintName> */}
    <Counter/>
  </StrictMode>,
)
