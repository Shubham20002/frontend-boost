import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function useDebounce(search,delay) {
    const [debouncesearch,setDebouncesearch]=useState();

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncesearch(search)
        },delay)

        return ()=>clearTimeout(timer)
    },[search,delay])
  return debouncesearch
}

export default useDebounce