import React from 'react'
import useDebounce from './hooks/useDebounce.jsx'
import { useState } from 'react'

function App() {
  const [search,setSearch]=useState()
  const debouncesearch =useDebounce(search,500)
  return (
    <div>
      <input type="text" name="" id=""  onChange={(e)=>setSearch(e.target.value)}/>
      <h3>search:{search}</h3>
      <h3>debouncesearch:{debouncesearch}</h3>
    </div>
  )
}

export default App