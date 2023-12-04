import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/ClassNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import style from "./NavBar.module.scss"

interface NavBarProps {
    className?:string
}

export const NavBar = ({className}:NavBarProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(style.NavBar,{},[className])}>
      <div className={classNames(style.links)}>
        <AppLink to={"/"} className={classNames(style.mainLink)}>{t("Main")}</AppLink>
        <AppLink to={"/about"}>{t("About")}</AppLink>
      </div>
    </div>
  )
}