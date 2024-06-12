import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('black')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 '>
          <button onClick={()=>setColor('green')} className='bg-green-500 text-clip p-1 rounded-md'>GREEN</button> 
          <button onClick = {()=>setColor('red')}className='bg-red-500 text-clip p-1 rounded-md'>RED</button> 
          <button onClick={()=>setColor('yellow')} className='bg-yellow-400 text-clip p-1 rounded-md'>YELLOW</button> 
          </div>
        </div>
    </div>
  )
}

export default App
