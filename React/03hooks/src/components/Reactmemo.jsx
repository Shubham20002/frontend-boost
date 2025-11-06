import React, { useState,memo, Component } from 'react'

const Child=memo(function Child({name}){
    console.log("child component called")
    return(
         <>
    <h1>name is :{name}</h1>
    </>
    )
   
})

function Reactmemo() {
    const [count,setcount]=useState(0)
  return (
    <>
    <h1>count:{count}</h1>
    <button onClick={()=>setcount((prev)=>prev+1)}>inc</button>
    <Child name="shubham"/>
    </>
  )
}

export default Reactmemo

// 1)hoc Component
// 2)react memo wrap function compone tand tell react res=render only when props change
// 3)by default what happen when parent re-render child also re-render to avpid this react memo helps