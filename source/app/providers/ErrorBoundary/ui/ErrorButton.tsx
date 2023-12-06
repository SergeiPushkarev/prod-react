import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button'

export const ErrorButton = () => {
  const {t} = useTranslation();
  const [getError, setGetError] = useState(false)
  const letThrow = () =>{
    setGetError(true)
  }
  useEffect(() => {
    if(getError) {
      throw new Error()
    }
  }, [getError])
  
  return (
    <Button onClick={letThrow}>
      {t("Error Button")}
    </Button>
  )
}
