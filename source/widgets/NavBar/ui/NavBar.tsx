import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./NavBar.module.scss"

interface NavBarProps {
    className?:string
}

export const NavBar = ({className}:NavBarProps) => {
  return (
    <div className={classNames(style.NavBar,{},[className])}>
    </div>
  )
}