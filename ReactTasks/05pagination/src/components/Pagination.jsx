import React, { useEffect, useState } from 'react'

function Pagination() {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState();
    const [curentpage,setCurentpage]=useState(1)
    const [userperpage,setUserperpage]=useState(5)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[]);

    const totalpage=Math.ceil(users.length/userperpage);
    const startIndex=(curentpage-1)*userperpage;
    const endIndex=startIndex+userperpage

    const userlist=users.slice(startIndex,endIndex)

  return (
    <>
    {userlist.map((u)=><div>{u.name}</div>)}
    {Array.from({length:totalpage}).map((_,index)=><button onClick={()=>setCurentpage(index+1)}>{index+1}</button>)}
    </>
  )
}

export default Pagination