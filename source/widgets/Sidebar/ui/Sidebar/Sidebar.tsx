import { useState } from 'react'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import style from "./Sidebar.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIco from 'shared/assets/icons/Home.svg'
import AboutIco from 'shared/assets/icons/about.svg'

interface SidebarProps {
    className?:string
}


export const Sidebar = ({className}: SidebarProps) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(true)
  const toggleOpen =()=>{
    setOpen(!open)
  }
  return (
    <div data-testid="sidebar" className={classNames(style.Sidebar,{[style.open]:open},[className])}>
      <Button 
        data-testid="toggleBtn" 
        onClick={toggleOpen} 
        className={classNames(style.collapseBtn)}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
      >
        {open
          ? "<"
          : ">"}
      </Button>
      <div className={style.links}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.INVERTED} className={style.item}>
          <HomeIco className={style.icon}/>
          <span>{t("Main")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.INVERTED} className={style.item}>
          <AboutIco className={style.icon}/>
          <span>{t("About")}</span>
        </AppLink>
      </div>
      <div className={classNames(style.switchers)}>
        <ThemeSwitcher/>
        <LangSwitcher className={style.lang} sideIsOpen={open}/>
      </div>
    </div>
  )
}