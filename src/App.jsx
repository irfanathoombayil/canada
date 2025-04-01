import { useState } from 'react'
import './App.css'
import Forum from './components/forum'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forum/>
    </>
  )
}

export default App
