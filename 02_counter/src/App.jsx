import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // above counter is varialbe which value is 0 and setCounter is a method which helps to update counter  
  // let counter = 0
  const addValue = () => {
    // console.log("Value Added", counter);
    // counter = counter + 1
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Let's learn React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Increase Value</button>
      <br />
      <button
        onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
