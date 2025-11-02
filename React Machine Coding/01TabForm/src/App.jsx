import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabForm from './components/TabForm'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <TabForm/>
  </>
  )
}

export default App
