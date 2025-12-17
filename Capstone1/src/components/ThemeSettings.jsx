import {createContext,useState} from 'react';  


export const ThemeContext = createContext();

function ThemeProvider({children}){ 
    //created a useState to hold the theme value 

    const [theme, setTheme] = useState ("light");

    const toggleTheme = () => {
        setTheme(
            //if value is light change to dark else change to light
            (prev)=>(prev==="light" ? "dark" : "light") 

        ); 

    } 

    return(
        <>
    
        <ThemeSettings.Provider value={{theme, setTheme, toggleTheme}}> 
            {children}
        </ThemeSettings.Provider>    
        </>
    )
}

export default ThemeProvider; 

