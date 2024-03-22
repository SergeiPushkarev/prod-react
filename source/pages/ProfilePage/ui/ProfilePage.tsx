import { profileReducer } from 'entities/Profile'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DinamicModuleLoader, ReducerList } from 'shared/lib/DinamicModuleLoader/DinamicModuleLoader'

const initialReducers:ReducerList = {
  profile:profileReducer
}

const ProfilePage = () => {
  const{t}=useTranslation('profile')
  return (

    <DinamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>{t('Profile Page')}</div>
    </DinamicModuleLoader>
  )
}

export default ProfilePage