import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe('getCounter.test', ()=>{
  test('should rtn counter value', () => {
    const state:DeepPartial<StateSchema> = {
      counter: { value: 5 }
    }
    expect(getCounter(state as StateSchema)).toEqual({value:5});
  });
})