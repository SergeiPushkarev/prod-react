import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./Button.module.scss"

export enum ThemeButton{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    theme?:ThemeButton;
    square?: boolean;
    size?:SizeButton;
    disabled?:boolean;
    children:ReactNode
}



export const Button = memo((props:ButtonProps) => {
  const {className, children, theme = ThemeButton.OUTLINE, square, size = SizeButton.M, disabled, ...otherProps} = props
  const mods = {
    [style[theme]]:true,
    [style.square]:square,
    [style[size]]:true,
    [style.disabled]:disabled
  }
  return (
    <button className={classNames(style.Button,mods,[className])} {...otherProps}>
      {children}
    </button>
  )
})