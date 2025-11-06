import React from 'react'
import SimpleVirtualList from "./components/Virtulization"
import VirtualList from './components/VirtualList'

function App() {
  const items=Array.from({items:1000},(_,i)=>`item ${i}`)
  return (
    // <Virtulization items={items}/>
    // <SimpleVirtualList/>
    <VirtualList/>
  )
}

export default App