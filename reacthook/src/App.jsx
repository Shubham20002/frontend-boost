

import Reactmemo from './compnents/Reactmemo.jsx'
import Usecallback from './compnents/Usecallback.jsx'
import useFetch from './compnents/useFetch.jsx'

function App() {
  const {data,loading}=useFetch('https://jsonplaceholder.typicode.com/todos/1')
  return (
    <>
    <h1>data :{loading ?"loding" :data.title}</h1>
    {/* <Reactmemo/> */}
    <Usecallback/>
    </>
  )
}

export default App