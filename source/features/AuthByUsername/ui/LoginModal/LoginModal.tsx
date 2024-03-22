import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'


interface LoginModalProps {
    className?:string
    isOpen?:boolean,
    onClose?:()=>void,
}

export const LoginModal = ({className, isOpen, onClose}:LoginModalProps) => {
  return (
    <Modal className={classNames(className, {}, [])} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader/>}>
        <LoginFormLazy onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
}