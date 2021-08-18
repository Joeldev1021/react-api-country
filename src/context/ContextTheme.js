import React, { createContext, useState } from 'react'

export  const ContextTheme = createContext()

let colors = [
   {  
    $element: "#fff",
    $background: "#fafafa",
    $text:"#111517",
    $input:"#858585",
    $hover: "inherit",
    $opacity: 1,
    $option: "rgba(0,0,0,0.1)",
   },
   {
    $element: "#2b3945",
    $background: "#202c37" ,
    $text:" #fff",
    $input: "#fff",
    $hover: "hsla(0,0%,100%,0.1)",
    $opacity: 1,
    $option: "hsla(0,0%,100%,0.1)"
   }
]

export const ProviderTheme=({children})=> {
    

    return (
        <ContextTheme.Provider value={{ 
          colors,
            }}>
            {children}
        </ContextTheme.Provider>
    )
}
