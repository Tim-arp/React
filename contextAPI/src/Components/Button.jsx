import React,{useContext} from 'react'
import Component from './Component'
import counterContext from './counterContext'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <>
    <button onClick={() => value.setCount((count) => count + 1)}
    ><span><Component/></span>I am a button</button>
    </>
  )
}
export default Button