import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str = str + "0123456789"
    }
    if (charAllowed) {
      str = str + "!@#$%^&*~{}"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copytoClipboard = useCallback( ()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  } ,[password])

  useEffect( ()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md text-center rounded-lg px-3 py-1 my-8  bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='my-2 flex shadow rounded-lg overflow-hidden mb-4 text-orange-500'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copytoClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2 text-orange-500'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={0}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label>Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            // here if the numberAllowed is true checkbox starts with check and viceversa
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            // Takes whatever the current value of numberAllowed is and set it to the opposite.
            // Whatever the checkbox is now, change it to the opposite.
          />
          <label>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  )
}
export default App