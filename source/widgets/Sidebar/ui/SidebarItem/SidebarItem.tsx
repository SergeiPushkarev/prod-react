import { classNames } from "shared/lib/ClassNames/ClassNames"
import style from "./SidebarItem.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/types/items'
import { useTranslation } from "react-i18next"
import { memo } from "react"


export interface SidebarItemProps {
    item:SidebarItemType,
    isOpen?:boolean
}
export const SidebarItem = memo(({item, isOpen}: SidebarItemProps) => {
  const {t} = useTranslation();
  return (
    <AppLink to={item.route} theme={AppLinkTheme.INVERTED} className={classNames(style.item,{[style.open]:isOpen},[])}>
      <item.Icon className={style.icon}/>
      <span className={style.text}>{t(item.text)}</span>
    </AppLink>
  )
}) 