import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface LangSwitcherProps {
    className?:string,
    sideIsOpen?:boolean
}

export const LangSwitcher = memo(({className,sideIsOpen}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang= async ()=>{
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button theme={ThemeButton.CLEAR} className={classNames('',{},[className])} onClick={toggleLang}>{t(sideIsOpen ? 'Language' : 'ShortLanguage')}</Button>
  )
})