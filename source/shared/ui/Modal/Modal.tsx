import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./Modal.module.scss"
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'


interface ModalProps {
    className?:string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
}

const ANIMATION_DELAY = 200

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props
  

  
  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const closeHandler = useCallback(()=>{
    if(onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(()=>{
        onClose();
        setIsClosing(false)
      },ANIMATION_DELAY);
    }
  },[onClose])

  const onKeyDown = useCallback((e:KeyboardEvent)=>{
    if(e.key === "Escape") {
      closeHandler()
    }
  }, [closeHandler])

  const mods: Record<string,boolean>={
    [style.opened]: isOpen,
    [style.isClosing]: isClosing,
  }
  
  const onContentClick = (e:React.MouseEvent)=> {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen){
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const {theme} = useTheme()
  
  return (
    <Portal>
      <div className={classNames(style.Modal,mods,[className])}>
        <div className={style.overlay} onClick={closeHandler}>
          <div className={classNames(style.content,{},[style[theme]])} onClick={onContentClick}>
            {children}
          </div>
        </div>  
      </div>
    </Portal>
  )
}