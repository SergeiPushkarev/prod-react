import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateSchema } from "app/providers/StoreProvider";

describe('getCounterValue.test', ()=>{
  test('should rtn value', () => {
    const state:DeepPartial<StateSchema> = {
      counter: {value:9}
    }
    expect(getCounterValue(state as StateSchema)).toEqual(9);
  });
})