import React from 'react'
import { UseTheme } from '../.contexts/UseTheme'

function Theme() {
    const {theme,changetheme}=UseTheme()
  return (
   <>
    <div>Theme :{theme }</div>
    <button onClick={()=>changetheme()}>change theme</button>
   </>
  )
}

export default Theme