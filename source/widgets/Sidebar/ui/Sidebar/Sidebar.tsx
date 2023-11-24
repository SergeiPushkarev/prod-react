import { useState } from 'react'
import { classNames } from 'shared/lib/ClassNames'
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
    <div className={classNames(style.Sidebar,{[style.open]:open},[className])}>
        <button onClick={toggleOpen} className={classNames (style.button,{},[className])}></button>
        <div className={classNames(style.switchers)}>
            <ThemeSwitcher/>
        </div>
    </div>
  )
}