import React from 'react'

function TodoList({list,deleteTodo,toggleTodo}) {
    console.log("map",list)
  return (
    <>
    <div>TodoList</div>
    <ol>
       {list && list.length>0 && list?.map((item)=><li>
        <div>{item.task}</div>
        <div ><button style={{background:item.iscompleted? "green":"red"}} onClick={()=>toggleTodo(item.task)}>toggle</button></div>
        <div onClick={()=>deleteTodo(item.task)}><button>delete</button></div>
       </li>)}
    </ol>
    </>
    

  )
}

export default TodoList