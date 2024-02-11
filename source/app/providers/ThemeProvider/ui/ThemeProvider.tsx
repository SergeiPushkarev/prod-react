import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';


const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?:Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children, initialTheme}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaulTheme);
  document.body.className = theme
  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme, 
  }), [theme])
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider