import React from 'react'
import { useState } from 'react'

function Fileupload() {
    const [file,setFile]=useState()

    const handlefileupload=(e)=>{
        const file=e.target.files[0];
        setFile(URL.createObjectURL(file))
    }


  return (
    <>
    <div className='main-div'>
    <h1>File Upload and preview</h1>
    <input
    type='file'
    accept='/*'
    onChange={handlefileupload}
    />
  

    {file && 
        <div className='file-div'>
        <img src={file} width={400} height={400}/>
        <button onClick={()=>setFile(null)}>delete</button>
        </div>}
          </div>
         </>
       
  )
}

export default Fileupload