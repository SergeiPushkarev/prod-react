/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./NavBar.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface NavBarProps {
    className?:string
}

export const NavBar = ({className}:NavBarProps) => {
  const {t} = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false)
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
  
  return (
    <div className={classNames(style.NavBar,{},[className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={style.links} onClick={openModal}>
        {t('Log In')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={closeModal}/>
    </div>
  )
}