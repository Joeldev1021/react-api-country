import React, { createContext, useState } from 'react'

export  const ContextTheme = createContext()

let colorTheme = [
  {  
    backgroundElement: "#2B3945",
    texColor: '#FEFEFE', 
  },
   {
    backgroundElement: "#FEFEFE",
    texColor: '#000000',
   }
]

export const ProviderTheme=({children})=> {
    const [aboutCountryPage, setAboutCountryPage] = useState(false)

    return (
        <ContextTheme.Provider value={{ 
             colorTheme,
             aboutCountryPage,
             setAboutCountryPage
            }}>
            {children}
        </ContextTheme.Provider>
    )
}
