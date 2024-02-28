import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    setTheme: (value: string) => {} 
});


export const useTheme = function() {
    return useContext(ThemeContext);
}

export const ThemeContextProvider = ThemeContext.Provider;