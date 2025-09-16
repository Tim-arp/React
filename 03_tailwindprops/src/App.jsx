import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Timarp",
    age : 21
  }
  
  let arr = [1,2,3,4,5]

  return (
    <div className="flex flex-col items-center space-y-8 py-10">
      {/* First block */}
      <h1 className="bg-green-500 text-white p-5 rounded-xl w-40 text-center">
        Tailwind Test
      </h1>
    <Card username = "Timarp" someObj = {myObj} someArr = {arr} btnText = "Click"/>
    <Card username = "Pramit" btnText = "Click me too"/>
      
    </div>
  )
}

export default App
