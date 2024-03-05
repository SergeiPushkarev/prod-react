import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localStorage";

interface getUserByUsernameProp {
    username:string,
    password:string
}

export const getUserByUsername = createAsyncThunk<User,getUserByUsernameProp, {rejectValue:string}>(
  'login/loginByUsername',
  async(authData,api) =>{
    try {
      const response = await axios.post('http://localhost:8080/login',authData)

      if (!response.data) {
        throw new Error ('empty response')
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      api.dispatch(userActions.setAuthUser(response.data))
      return response.data
    } catch (error) {
      console.log(error)
      return api.rejectWithValue('err')
    }
  }
) 