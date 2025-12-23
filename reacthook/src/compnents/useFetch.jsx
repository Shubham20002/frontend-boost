import { useEffect, useState } from "react";


function useFetch(url){
    const [data,setData]=useState("");
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setloading(false)
      })
      
    },[url])
    return {data,loading}
}

export default useFetch