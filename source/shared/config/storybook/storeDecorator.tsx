import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/LoginSlice";
import { ReducerList } from "shared/lib/DinamicModuleLoader/DinamicModuleLoader";

const defaultReducers:ReducerList = {
  loginForm:loginReducer,
  profile:profileReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>, otherReducers?:ReducerList) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{...defaultReducers,...otherReducers}}>
    <StoryComponent />
  </StoreProvider>
);