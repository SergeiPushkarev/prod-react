import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./Text.module.scss"

interface TextProps {
    className?:string,
    title?:string,
    text?:string,
    theme?:ThemeText
}

export enum ThemeText {
    PPRIMARY="primary",
    ERROR = 'error'
}

export const Text = (props: TextProps) => {
  const {
    className,
    title,
    text,
    theme=ThemeText.PPRIMARY

  } = props
  return (
    <div className={classNames(style.Text,{[style[theme]]:true},[className])}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  )
}