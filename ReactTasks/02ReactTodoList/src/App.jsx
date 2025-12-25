import React, { useState } from 'react'

function App() {
  const [todo,setTodo]=useState('')
  const [todoList,setTodolist]=useState([])

  const addTodo=()=>{
    if(todo==''){
      return 
    }
    else{
      setTodolist((prev)=>[...prev,{todo,iscompleted:false,id:new Date()}])
      setTodo('')
    }
  }

  const deleteTodo=(id)=>{
    setTodolist((prev)=>prev.filter((todo)=>todo.id!==id))

  }

  const toggleTodo=(id)=>{
    setTodolist((prev)=>prev.map((todo)=>todo.id==id ? {...todo,iscompleted:!todo.iscompleted}:todo))
  }
  return (
    <div>
      <h1>To do list</h1>
      <div>
        <input type='text' onChange={(e)=>setTodo(e.target.value)} value={todo
          
        }/>
        <button onClick={()=>addTodo()}>Add To do</button>
      </div>
      <div>
        <ol>
          {todoList && todoList.map((todo)=>
  <li key={todo.id}>
    <h4>{todo.todo}</h4>
    <button style={{background: todo.iscompleted ?"green" :"red"}} onClick={()=>toggleTodo(todo.id)}>{todo.iscompleted ?"completed":"pending"}</button>
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
  </li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default App