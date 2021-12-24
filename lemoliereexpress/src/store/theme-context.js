import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext({
    theme: "",
    switchTheme: () => {},
});

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') === "light" ? "light" : "dark");

    useEffect(() => {
        localStorage.setItem('theme', theme);

        switch (theme) {
            case "light":
                document.getElementById('root').classList.remove('darkTheme');
                document.body.classList.remove('darkTheme');
                document.getElementById('footer').classList.remove('darkTheme');
                break;
            case "dark":
                document.getElementById('root').classList.add('darkTheme');
                document.body.classList.add('darkTheme');
                document.getElementById('footer').classList.add('darkTheme');
                break;
        }
    }, [theme])

    const switchTheme = () => {
        if (theme === "light"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const value = {
        theme,
        switchTheme
    };

    return(
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;