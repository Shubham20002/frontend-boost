import { createContext, useContext, useState } from "react"

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("dark");

    const changetheme=()=>{
        setTheme((prev)=>prev=="dark" ? "light" :"dark")
    }

    return(
        <ThemeContext.Provider value={{theme,changetheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const UseTheme=()=>
    {
        return useContext(ThemeContext);
    }
