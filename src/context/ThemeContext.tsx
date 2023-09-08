import { createContext, useContext, useState, useEffect } from "react";

enum THEME_TYPES {
    LIGHT = 'light',
    DARK = 'dark',
};

const THEME_CLASSES = {
    DARK_MODE: 'dark-mode',
    LIGHT_MODE: 'light-mode',
};

const ThemeContext = createContext({ theme: THEME_TYPES.LIGHT, toggleTheme: () => {} });

const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
    const initialTheme = () => THEME_TYPES.LIGHT;
    const [theme, setTheme] = useState<THEME_TYPES>(initialTheme);
    const toggleTheme = () => setTheme((theme: THEME_TYPES) => (theme === THEME_TYPES.LIGHT ? THEME_TYPES.DARK : THEME_TYPES.LIGHT));
    
    useEffect(() => {
        if (theme === THEME_TYPES.LIGHT) {
            document.documentElement.classList.remove(THEME_CLASSES.DARK_MODE);
            document.documentElement.classList.add(THEME_CLASSES.LIGHT_MODE);
          } else {
            document.documentElement.classList.remove(THEME_CLASSES.LIGHT_MODE);
            document.documentElement.classList.add(THEME_CLASSES.DARK_MODE);
          }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};

export { ThemeContext, ThemeProvider, useTheme };
