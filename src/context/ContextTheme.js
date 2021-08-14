import React, { createContext, useState } from 'react'

export  const ContextTheme = createContext()

let colorTheme = [
  {
    backgroundTheme : "#202c37",
    backgroundElement: "#2b3945",
    texColor: '#FEFEFE',
    borderColor: '1px solid #1b2630'
  },
   {
    backgroundTheme:"#FAFAFA",
    backgroundElement: "#FEFEFE",
    texColor: '#000000',
    borderColor: '1px solid #E8EEEE'
   }
]

export const ProviderTheme=({children})=> {
    const [themeDark, setThemeDark] = useState(false)
    return (
        <ContextTheme.Provider value={{
            themeDark,
             setThemeDark, 
             colorTheme
            }}>
            {children}
        </ContextTheme.Provider>
    )
}
