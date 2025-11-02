import React from 'react'

function Profile({data,setData}) {
  console.log("data",data)
  const {profile}=data
  const handledatachange=(e)=>{
    setData((prev)=>{
      return{
        ...prev,
        profile:{
          ...profile,
          [e.target.name]:e.target.value
        }
      }
    })
  }
  return (
    
    <>
    <div>
        <label>Name</label>
        <input type="text" name="name" placeholder='Name' value={profile.name} onChange={handledatachange}/>
    </div>
    <div>
        <label>Age</label>
        <input type="number" name="age" placeholder='age' value={profile.age} onChange={handledatachange}/>
    </div>
    <div>
        <label>Placeholder</label>
        <input type="email" name="email" placeholder='email' value={profile.email} onChange={handledatachange}/>
    </div>
    </>
  )
}

export default Profile