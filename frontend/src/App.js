import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [userName, setUserName] = useState('')
  // console.log({userName})


  useEffect(() => {
    getNames();
  }, [])


  const getNames = async () => {
    // const response = await axios('http://localhost:5000/names')
    const response = await axios('/names')
    // console.log({response})
    setUserName(response.data)
  }


  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
    </>
  )
}

export default App