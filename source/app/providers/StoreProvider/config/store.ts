import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User/model/slice/userSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/LoginSlice";

export function createReduxStore(initialState?:StateSchema) {
  const rootReducers:ReducersMapObject<StateSchema> = {
    counter:counterReducer,
    user:userReducer,
    loginForm:loginReducer,
  }
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState:initialState,
  })
}