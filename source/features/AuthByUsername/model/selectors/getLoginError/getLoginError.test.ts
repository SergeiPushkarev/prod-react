import { StateSchema } from "app/providers/StoreProvider";
import { getloginError } from "./getLoginError";

describe('getLoginError.test.', ()=>{
  test('test getLoginError', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        error:"error"
      }
    }

    expect(getloginError(state as StateSchema)).toEqual('error');
  });
  test('test getLoginError empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getloginError(state as StateSchema)).toEqual(undefined);
  });
})