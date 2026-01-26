import {React, useContext} from 'react'
import counterContext from './counterContext'
const Component  = () => {
    const value = useContext(counterContext)
    return (
    <div>{value.count}</div>
  )
}

export default Component