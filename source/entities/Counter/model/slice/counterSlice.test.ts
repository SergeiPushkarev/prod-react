import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe('counterSlice.test', ()=>{
  test('counter increment', () => {
    const state:CounterSchema = {value:5}
    expect(counterReducer(state, counterActions.increment())).toEqual({value:6});
  });
  test('counter decrement', () => {
    const state:CounterSchema = {value:5}
    expect(counterReducer(state, counterActions.decrement())).toEqual({value:4});
  });
  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({value:-1});
  });
})