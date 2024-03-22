/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./NavBar.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, getUserAuthData } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'

interface NavBarProps {
    className?:string
}

export const NavBar = memo(({className}:NavBarProps) => {
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
      {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={closeModal}/>}
    </div>
  )
})