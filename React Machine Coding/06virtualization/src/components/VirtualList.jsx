import React, { useState } from 'react'

function VirtualList() {
    const list=Array.from({length:1000},(_,i)=>`item${i}`)
    const itemheight=35;
    const visibleitem=10;
    const [scrolltop,setScrolltop]=useState(0);

    const startindex=Math.floor(scrolltop/itemheight);
    const endindex=startindex+visibleitem;
    const visiblelist=list.slice(startindex,endindex);

  return (
    <>
    <div style={{height:itemheight*visibleitem, width:'300px', overflowY:"auto" }} onScroll={(e)=>setScrolltop(e.target.scrollTop)}>
        <div style={{height:list.length*itemheight,position:"relative"}}>
            {visiblelist.map((item,i)=>{
                return <div
                style={{position:"relative", top:(startindex+i)*itemheight, height:itemheight}}>
                    {item}
                </div>
            })}
        </div>

    </div>
    </>
  )
}

export default VirtualList