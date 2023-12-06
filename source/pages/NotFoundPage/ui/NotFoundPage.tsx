import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./NotFoundPage.module.scss"

interface NotFoundPageProps {
    className?:string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(style.NotFoundPage,{},[className])}>
      {t('Page not found')}   
    </div>
  )
}