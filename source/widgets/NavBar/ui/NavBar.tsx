/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./NavBar.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from 'entities/User/model/slice/userSlice'
import { getUserAuthData } from 'entities/User'

interface NavBarProps {
    className?:string
}

export const NavBar = ({className}:NavBarProps) => {
  const {t} = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false)
  const dispatch = useDispatch()
  const isAuth = useSelector(getUserAuthData)
  const openModal = useCallback(
    ()=> {
      setIsOpenModal(true)
    },
    [],
  )
  const closeModal = useCallback(
    ()=> {
      setIsOpenModal(false)
    },
    [],
  )
  const logout = useCallback(()=>{
    dispatch(userActions.logOutUser())
  },[dispatch])
  
  if (isAuth) {
    return (
      <div className={classNames(style.NavBar,{},[className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED} className={style.links} onClick={logout}>
          {t('Log Out')}
        </Button>
      </div>
    )
  }
  return (
    <div className={classNames(style.NavBar,{},[className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={style.links} onClick={openModal}>
        {t('Log In')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={closeModal}/>
    </div>
  )
}