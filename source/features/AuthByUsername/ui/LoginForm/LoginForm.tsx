import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./LoginForm.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getloginState } from '../../model/selectors/getLoginState/getLoginState'
import { useCallback } from 'react'
import { loginActions } from 'features/AuthByUsername/model/slice/LoginSlice'
import { getUserByUsername } from '../../model/services/getUserByUsername/getUserByUsername';
import { Text, ThemeText } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?:string
}

export const LoginForm = (props: LoginFormProps) => {
  const {className} = props
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {username, password, isLoading, error} = useSelector(getloginState)
  

  const onChangeUserName = useCallback((value:string)=> {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((password:string)=> {
    dispatch(loginActions.setPassword(password))
  }, [dispatch])

  const onLoginClick = useCallback(()=>{
    dispatch(getUserByUsername({username, password}))
  },[dispatch, password, username])

  return (
    <div className={classNames(style.LoginForm, {}, [className])} >
      <Text title={t('Authorization Form')}/>
      {error && <Text text={error} theme={ThemeText.ERROR}/>}
      <Input placeholder={t('Enter Name')} value={username} onChange={onChangeUserName}/>
      <Input placeholder={t('Enter Password')} type='password' value={password} onChange={onChangePassword}/>
      <Button theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading}>{t('Log In')}</Button>
    </div>
  )
}