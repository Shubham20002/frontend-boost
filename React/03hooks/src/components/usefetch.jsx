//custom hook-
//1)custom hook is normal js function start with use 
//2)allow us to extract reuseable logic
//3)custom hook can use react hook inside it
//4)does not return jsx it return data or function

import { useState,useEffect } from 'react'


function useFetch(url){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState();


    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>res.json())
        .then(result=>{
            setData(result)
            setLoading(false)
        })
    },[url])

    return {data,loading}
}

export default useFetch