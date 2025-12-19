import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    // Created a useState to hold the theme value
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(
            // If value is light, change to dark; else change to light
            (prev) => (prev === "light" ? "dark" : "light")
        );
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}

export default ThemeProvider;


