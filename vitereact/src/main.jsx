import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target = '_blank'>Google</a>
)

const anotherUser = "Timarp Again"
const reactElement = React.createElement(
  'a',
  {href : "https://www.google.com", target : "_blank"},
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
)