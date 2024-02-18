import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./Input.module.scss"
import { InputHTMLAttributes, memo } from 'react'

type HTMLInputProp = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProp {
    className?:string,
    value?:string,
    onChange?:(value:string)=>void,
    placeholder?:string
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {className, value, onChange, placeholder, type = "text", ...otherProps} = props
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    onChange?.(e.target.value)
  }
  return (
    <div className={classNames(style.Input,{},[className])}>
      <div>{placeholder && `${placeholder} >`}</div>
      <input className={style.input} type={type} value={value} onChange={onChangeHandler} {...otherProps}/>
    </div>
  )
})