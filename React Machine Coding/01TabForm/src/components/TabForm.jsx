import React, { useState } from 'react'
import Profile from './Profile'
import Intrests from './Intrests'
import Settings from './Settings'

function TabForm() {
    const tab=[
        {
            name:"Profile",
            component:Profile,
        },
         {
            name:"Intrests",
            component:Intrests,
        },
         {
            name:"Setting",
            component:Settings,
        }

    ]
   const [data,SetData]=useState({
    peofile:{
        name:"shubham",
        age:23
    }
   })
    const [activeTab,setActiveTab]=useState(0);

   const Activecomponent=tab[activeTab].component;

  return (
    <>
    <div className='top-bar'>
        {tab.map((t,index)=>{
            return <div className={`tab ${activeTab==index ? 'selected' :"not-selected"}`} 
            key={index}
            onClick={()=>setActiveTab(index)}>
                {t.name}
                </div>
        })}
    </div>
    <div>
        <Activecomponent/>
    </div>
    </>
  )
}

export default TabForm