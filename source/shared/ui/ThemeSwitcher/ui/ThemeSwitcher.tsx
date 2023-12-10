import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import LightIco from 'shared/assets/icons/theme-light.svg'
import DarkIco from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?:string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()
  return (
    <Button
      className={classNames(className,{},[className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}>
      {theme === Theme.DARK ? <DarkIco/> : <LightIco />}
    </Button>
  )
}