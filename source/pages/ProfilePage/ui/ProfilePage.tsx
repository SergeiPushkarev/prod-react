import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { DinamicModuleLoader, ReducerList } from 'shared/lib/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const initialReducers:ReducerList = {
  profile:profileReducer
}

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchProfileData())
  }, [dispatch])
  return (
    <DinamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfileCard />
    </DinamicModuleLoader>
  )
}

export default ProfilePage