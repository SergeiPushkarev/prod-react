import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/ClassNames'
import style from "./ThemeSwitcher.module.scss"
import LightIco from 'shared/assets/icons/theme-light.svg'
import DarkIco from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

interface ThemeSwitcherProps {
    className?:string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()
  return (
    <Button
      className={classNames(style.ThemeSwitcher,{},[className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}>
      {theme === Theme.DARK ? <DarkIco/> : <LightIco />}
    </Button>
  )
}