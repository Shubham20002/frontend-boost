
import React from 'react'
import Accordion from './Accordion'

function App() {
  const items=[
    {
      "title":"javascript",
      "content":"learn basic and advance javascript"
    },
    {
      "title":"React",
      "content":"learn basic and advance javascript"
    },
    {
      "title":"Vuejs",
      "content":"learn basic and advance javascript"
    },
    {
      "title":"next",
      "content":"learn basic and advance javascript"
    },

  ]
  return (
    <>
    <Accordion items={items}/>
    </>
  )
}

export default App