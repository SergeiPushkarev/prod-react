import { classNames } from 'shared/lib/ClassNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import style from "./NavBar.module.scss"

interface NavBarProps {
    className?:string
}

export const NavBar = ({className}:NavBarProps) => {
  return (
    <div className={classNames(style.NavBar,{},[className])}>
      <ThemeSwitcher/>
      <div className={classNames(style.links)}>
        <AppLink to={"/"} className={classNames(style.mainLink)}>Главная</AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  )
}