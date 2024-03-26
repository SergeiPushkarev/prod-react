import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/ProfileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'


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
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state,action:PayloadAction<Profile>)=>{
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.rejected, (state, action)=>{
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions:profileActions } = ProfileSlice

export const { reducer:profileReducer } = ProfileSlice