import { ErrorButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const {t}= useTranslation('main')
  return (
    <div>
      <ErrorButton/>
      {t('Main page')}
    </div>
  )
}

export default MainPage