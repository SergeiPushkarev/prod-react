import { classNames } from 'shared/lib/ClassNames/ClassNames'
import style from "./ProfileCard.module.scss"
import { Text, ThemeText } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileLoad } from '../../model/selectors/getProfileLoad/getProfileLoad'


export const ProfileCard = () => {
  const{t}=useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoad)
  return (
    <div className={classNames(style.ProfileCard,{},[])}>
      <div className={style.header}>
        <Text title={t('Profile')} theme={ThemeText.PPRIMARY}/>
        <Button theme={ThemeButton.OUTLINE} className={style.editBtn}>
          {t('Edit profile')}
        </Button>
      </div>
      <div className={style.data}>
        <Input placeholder={t('Your name')} value={data?.first}/>   
        <Input placeholder={t('Your surname')} value={data?.lastname}/>
      </div>
    </div>
  )
}