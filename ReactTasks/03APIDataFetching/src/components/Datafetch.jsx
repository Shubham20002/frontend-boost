import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../style/Datafetch.css'

function Datafetch() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState();
    const [search,setSearch]=useState('')
 
    useEffect(()=>{
     fetchData()
    },[])

    const fetchData=()=>{
        setLoading(true);
        try{
            fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
            setLoading(false)
        })
        }
        catch{
            setLoading(false)
            setError("error while fetching data")
        }      
    }

    const filterdata=data.filter((user)=>
    user.name.toLowerCase().includes(search?.toLowerCase()) ||
    user.email.toLowerCase().includes(search?.toLowerCase()) ||
    user.address.city.toLowerCase().includes(search?.toLowerCase())
    )
    console.log("ff",filterdata)


  return (
    <>
    <p>{loading && "loading Data"}</p>
    <p>{error}</p>
    
    <div className='main-container'>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        <div className='table-style'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {filterdata.map((d)=>
                    <tr>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.address.city}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Datafetch