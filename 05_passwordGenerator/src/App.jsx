import { useCallback, useState, useEffect,useRef } from 'react'

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
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback( ()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4);
    const smallpass = password.substring(0,4)
    window.navigator.clipboard.writeText(smallpass)
  },[password] )

  useEffect( ()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed] )

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
        onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700 hover:cursor-pointer active:bg-blue-950 active:scale-103'
        >Copy</button>
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
          <label>Lenght : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Character</label>
        </div>


      </div>
    </div>
  )
}
export default App 