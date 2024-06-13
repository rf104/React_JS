import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password,setPassword] = useState('')
  const [charAllowd,setCharAllowed] = useState(false)
  const [numAllowed,setNumAllowed] = useState(false)
  const [length,setLength] = useState(8)
  const passwordRef = useRef(null);

  const passGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowd) str += "!@#$%^&*()_+"

    for(let i=1;i<length;i++)
    {
        const char = Math.floor(Math.random()*str.length+1);
        pass += str.charAt(char)
    }
    setPassword(pass);
  },[length,numAllowed,charAllowd])

  useEffect(()=>{
    passGenerator();
  },[length,numAllowed,charAllowd])


  const copyPassword = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPassword}  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
                  type="range"
                  min ={8}
                  max={100}
                  value = {length}
                  className='cursor-pointer'
                  onChange={(e)=>{setLength(e.target.value)}}
              />
              <label htmlFor="length">length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={numAllowed}
              onChange={(e)=>{setNumAllowed((prev)=>{!prev})}}
              name=""
              id="" 
              />
              <label htmlFor="number">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={numAllowed}
              onChange={(e)=>{setCharAllowed((prev)=>{!prev})}}
              name=""
              id="" 
              />
              <label htmlFor="number">Charecter</label>
          </div>
      </div>
    </div>
  )
}

export default App
