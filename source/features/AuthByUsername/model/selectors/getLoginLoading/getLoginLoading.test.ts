import { StateSchema } from "app/providers/StoreProvider";
import { getloginLoading } from "./getLoginLoading";

describe('getLoginLoading.test.', ()=>{
  test('test getLoginLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        isLoading: true
      }
    }

    expect(getloginLoading(state as StateSchema)).toEqual(true);
  });
  test('test getLoginLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        isLoading: false
      }
    }

    expect(getloginLoading(state as StateSchema)).toEqual(false);
  });
  test('test getLoginLoading empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getloginLoading(state as StateSchema)).toEqual(false);
  });
})