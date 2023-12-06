import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./AppLink.module.scss"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?:string;
    theme?:AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {className, children, to, theme = AppLinkTheme.PRIMARY, ...oterProps} = props;
  return (
    <Link to={to} className={classNames(style.AppLink,{},[className,style[theme]])} {...oterProps}>
      {children}
    </Link>
  )
}