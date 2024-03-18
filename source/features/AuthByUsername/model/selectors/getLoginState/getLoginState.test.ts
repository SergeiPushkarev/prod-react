import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getloginState } from "./getLoginState";

describe('getLoginState.test', ()=>{
  test('test getLoginState', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        error:'',
        username:'name',
        isLoading:false,
        password:'321'
      }
    }

    expect(getloginState(state as StateSchema)).toEqual({
      error:'',
      username:'name',
      isLoading:false,
      password:'321',
    });

  })

  test('test getLoginState empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    
    expect(getloginState(state as StateSchema)).toEqual(undefined);
  })
})