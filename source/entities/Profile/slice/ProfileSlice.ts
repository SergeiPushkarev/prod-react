import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/ProfileSchema'


const initialState:ProfileSchema = {
  data: undefined,
  isLoading:false,
  readonly:true,
  error:undefined
}

export const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {},
})

export const { actions:profileActions } = ProfileSlice

export const { reducer:profileReducer } = ProfileSlice