import { RoutePath } from "shared/config/routeConfig/routeConfig"
import HomeIco from 'shared/assets/icons/Home.svg'
import AboutIco from 'shared/assets/icons/about.svg'
import ProfileIco from 'shared/assets/icons/Vector.svg'

export interface SidebarItemType {
    route:string,
    text:string,
    Icon:React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemList:Array<SidebarItemType> = [
  {
    route:RoutePath.main,
    text:'Main',
    Icon: HomeIco,
  },
  {
    route:RoutePath.about,
    text:'About',
    Icon: AboutIco,
  },
  {
    route:RoutePath.profile,
    text:'Profile',
    Icon: ProfileIco  ,
  },
]