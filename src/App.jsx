import { useState } from 'react'
import './App.css'
import Forum from './components/forum'
import Post from './components/Post'
import view from './components/view'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forum/>
      <Post/>
      <view/>
     
    </>
  )
}

export default App