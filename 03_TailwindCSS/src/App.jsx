import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Tailwind CSS Project!!</h1>
      <Cart username = "Aref" post = 'Software Engineer'/>
      <Cart />
      <Cart />
    </>
  )
}

export default App
