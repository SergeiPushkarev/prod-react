import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getloginPassword } from "./getLoginPassword";

describe('getLoginPassword.test.', ()=>{
  test('test getLoginPassword', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        password:"321"
      }
    }

    expect(getloginPassword(state as StateSchema)).toEqual('321');
  });
  test('test getLoginPassword empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getloginPassword(state as StateSchema)).toEqual('');
  });
})