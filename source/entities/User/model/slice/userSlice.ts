import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/userSchema'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage'


const initialState:UserSchema = {
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action:PayloadAction<User>)=>{
      state.authData = action.payload
    },
    initAuthData:(state)=>{
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logOutUser:(state)=>{
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state.authData = undefined;
    }
  },
})

export const { actions:userActions } = userSlice

export const { reducer:userReducer } = userSlice