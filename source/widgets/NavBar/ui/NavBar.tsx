/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./NavBar.module.scss"
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'

interface NavBarProps {
    className?:string
}

export const NavBar = ({className}:NavBarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(
    ()=> {
      setIsAuthModal((prev)=>!prev)
    },
    [],
  )
  
  return (
    <div className={classNames(style.NavBar,{},[className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={style.links} onClick={onToggleModal}>
        {t('Log In')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, officia minus? Natus similique nesciunt porro blanditiis sit? Expedita hic autem adipisci error nobis laudantium quo. Aliquam, ex? Accusantium, magnam sit.
      </Modal>
    </div>
  )
}