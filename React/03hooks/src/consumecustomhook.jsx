import React from 'react'
import useFetch from './components/usefetch.jsx'

function Consumecustomhook() {
    const {data,loading}=useFetch('https://jsonplaceholder.typicode.com/todos/1')
  return (
   <>
   {loading && <h1>loading</h1>}
   {data && <h1>{data.userId}</h1>}
   </>
  )
}

export default Consumecustomhook