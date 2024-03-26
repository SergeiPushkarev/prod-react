import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localStorage";

interface getUserByUsernameProp {
    username:string,
    password:string
}

export const getUserByUsername = createAsyncThunk<User,getUserByUsernameProp, ThunkConfig<string>>(
  'login/loginByUsername',
  async(authData,ThunkApi) =>{
    const {dispatch, extra,rejectWithValue} = ThunkApi
    try {
      const response = await extra.api.post<User>('/login',authData)
      extra.navigate?.('/profile')
      if (!response.data) {
        throw new Error ('empty response')
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthUser(response.data))
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('err')
    }
  }
) 