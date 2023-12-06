import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Button } from 'shared/ui/Button/ui/Button'
import style from "./PageError.module.scss"

interface PageErrorProps {
    className?:string
}

export const PageError = ({className}: PageErrorProps) => {
  const {t} = useTranslation();
  const reloadPage = ()=>{
    location.reload()
  }
  return (
    <div className={classNames(style.PageError,{},[className])}>
      <p>{t('An unexpected error occurred')}</p>
      <Button onClick={reloadPage}>
        {t('Reload Page')}
      </Button>
    </div>
  )
}