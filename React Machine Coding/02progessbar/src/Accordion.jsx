import React from 'react'

function Accordion({items}) {
  return (
    <div>
        {items.map((item,index)=>{
            return(
               <div>
                <button>{item.title}</button>
                <div>{item.content}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Accordion