import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { getUserByUsername } from '../services/getUserByUsername/getUserByUsername'

const initialState:LoginSchema = {
  username:"",
  password:"",
  isLoading:false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action:PayloadAction<string>) =>{
      state.username = action.payload},
    setPassword: (state, action:PayloadAction<string>) =>{
      state.password = action.payload}
  },
  extraReducers(builder) {
    builder
      .addCase(getUserByUsername.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(getUserByUsername.fulfilled, (state)=>{
        state.isLoading = false
      })
      .addCase(getUserByUsername.rejected, (state, action)=>{
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions:loginActions } = loginSlice

export const { reducer:loginReducer } = loginSlice