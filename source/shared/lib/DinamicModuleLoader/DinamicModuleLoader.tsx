import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
    [name in StateSchemaKey]?:Reducer
}

export interface DinamicModuleLoaderProps {
    reducers:ReducerList;
    removeAfterUnmount?:boolean
}

export const DinamicModuleLoader: FC<DinamicModuleLoaderProps> = (props) => {
  const{
    children,
    reducers,
    removeAfterUnmount
  } = props;

  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager;

  useEffect(()=> {
    Object.entries(reducers).forEach(([name,reducer])=>{
      store.reducerManager.add(name as StateSchemaKey,reducer);
      dispatch({type:`@INIT ${name} reducer`})
    })
    return ()=> {
      Object.entries(reducers).forEach(([name])=>{
        if (removeAfterUnmount) {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({type:`@REMOVE ${name} reducer`})
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      {children}
    </>
  )
}