import React from 'react'

function Settings({data,setData}) {
  const {Setting}=data;
  const handletheme=(e)=>{
    setData((prev)=>{
      return {
        ...prev,
        Setting: {theme:e.target.value}
      }
    })
  }
  return (
    <>
    <div>
      <label>
        <input type="radio" name='theme' value="dark" onChange={handletheme} checked={Setting.theme=="dark"}/>
      Dark
      </label>
       <label>
        <input type="radio" name='theme' value="light" onChange={handletheme} checked={Setting.theme=="light"} />
      Dark
      </label>
    </div>
    </>
  )
}

export default Settings