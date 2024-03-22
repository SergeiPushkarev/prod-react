import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./LoginForm.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/LoginSlice'
import { getUserByUsername } from '../../model/services/getUserByUsername/getUserByUsername';
import { Text, ThemeText } from 'shared/ui/Text/Text'
import { getloginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getloginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getloginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getloginError } from '../../model/selectors/getLoginError/getLoginError'
import { DinamicModuleLoader, ReducerList } from 'shared/lib/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
    className?:string,
    onSuccess: ()=>void
}

const initialReducers:ReducerList = {
  loginForm:loginReducer
}

// eslint-disable-next-line react/display-name
const LoginForm = memo((props: LoginFormProps) => {
  const {className, onSuccess} = props
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getloginUsername)
  const password = useSelector(getloginPassword)
  const isLoading = useSelector(getloginLoading)
  const error = useSelector(getloginError)

  const onChangeUserName = useCallback((value:string)=> {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((password:string)=> {
    dispatch(loginActions.setPassword(password))
  }, [dispatch])

  const onLoginClick = useCallback(async ()=>{
    const result = await dispatch(getUserByUsername({username, password}))
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess()
    }
  },[dispatch, onSuccess, password, username])

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DinamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(style.LoginForm, {}, [className])} >
        <Text title={t('Authorization Form')}/>
        {error && <Text text={error} theme={ThemeText.ERROR}/>}
        <Input placeholder={t('Enter Name')} value={username} onChange={onChangeUserName}/>
        <Input placeholder={t('Enter Password')} type='password' value={password} onChange={onChangePassword}/>
        <Button theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading}>{t('Log In')}</Button>
      </div>
    </DinamicModuleLoader>
  )
})
export default LoginForm