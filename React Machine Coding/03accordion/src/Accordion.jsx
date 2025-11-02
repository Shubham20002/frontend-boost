import React from 'react'
import { useState } from 'react'

function Accordion({items}) {
    const [openbox,setOpenbox]=useState(null);
    const handletoggle=(index)=>{
        setOpenbox((prev)=>prev==index ? null :index)

    }
  return (
    <div className='accordion'>
        {items.map((item,index)=>{
            return(
               <div className='accordion-item'>
                <button className='accordion-title' onClick={()=>handletoggle(index)}>{item.title}</button>
              {openbox==index && <div className='accordion-content'>{item.content}</div>}  
                </div>
            )
        })}
    </div>
  )
}

export default Accordion