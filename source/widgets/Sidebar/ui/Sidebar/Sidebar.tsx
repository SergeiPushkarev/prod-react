import { useState } from 'react'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Button } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import style from "./Sidebar.module.scss"

interface SidebarProps {
    className?:string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [open, setOpen] = useState(true)
  const toggleOpen =()=>{
    setOpen(!open)
  }
  return (
    <div data-testid="sidebar" className={classNames(style.Sidebar,{[style.open]:open},[className])}>
      <Button data-testid="toggleBtn" onClick={toggleOpen}>
        {open
          ? "<<<"
          : ">>>"}
      </Button>
      <div className={classNames(style.switchers)}>
        <ThemeSwitcher/>
        <LangSwitcher className={style.lang}/>
      </div>
    </div>
  )
}