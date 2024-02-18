import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./LoginForm.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { useState } from 'react'

interface LoginFormProps {
    className?:string
}

export const LoginForm = (props: LoginFormProps) => {
  const {className} = props
  const {t} = useTranslation()
  const [username, setUsername] = useState('')
  return (
    <div className={classNames(style.LoginForm, {}, [className])} >
      <Input placeholder={t('Enter Name')} value={username} onChange={setUsername}/>
      <Input placeholder={t('Enter Password')}/>
      <Button theme={ThemeButton.OUTLINE}>{t('Log In')}</Button>
    </div>
  )
}