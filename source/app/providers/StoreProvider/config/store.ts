import { ReducersMapObject, configureStore, } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User/model/slice/userSlice";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions } from "react-router";
import { To } from "history";

export function createReduxStore(initialState?:StateSchema, asyncReducers?:ReducersMapObject<StateSchema>, navigate?: (to: To, options?: NavigateOptions)=> void) {
  const rootReducers:ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter:counterReducer,
    user:userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg:ThunkExtraArg = {
    api:$api,
    navigate,
  }
  
  const store = configureStore({
    //@ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__, 
    preloadedState:initialState,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
      thunk:{
        extraArgument: extraArg
      },
    })
  })
  //@ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]