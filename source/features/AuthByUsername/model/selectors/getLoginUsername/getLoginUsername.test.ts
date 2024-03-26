import { StateSchema } from "app/providers/StoreProvider";
import { getloginUsername } from "./getLoginUsername";

describe('getLoginUsername.test.', ()=>{
  test('test getLoginUsername', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        username:"Username"
      }
    }

    expect(getloginUsername(state as StateSchema)).toEqual('Username');
  });
  test('test getLoginUsername empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getloginUsername(state as StateSchema)).toEqual('');
  });
})