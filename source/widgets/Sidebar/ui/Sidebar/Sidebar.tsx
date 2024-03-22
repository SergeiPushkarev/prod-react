import { memo, useState } from 'react'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import style from "./Sidebar.module.scss"
import { SidebarItemList } from 'widgets/Sidebar/model/types/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?:string,
}


export const Sidebar = memo(({className}: SidebarProps) => {
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
        {SidebarItemList.map((item)=>(
          <SidebarItem item={item} isOpen={open} key={item.route}/>
        ))}
      </div>
      <div className={classNames(style.switchers)}>
        <ThemeSwitcher/>
        <LangSwitcher className={style.lang} sideIsOpen={open}/>
      </div>
    </div>
  )
})