import { loginActions, loginReducer } from "./LoginSlice";
import { LoginSchema } from "../types/LoginSchema";

describe('LoginSlice.test', ()=>{
  test('test LoginSlice setUsername', () => {
    const state:DeepPartial<LoginSchema> = {username:'user'}
    expect(loginReducer(state as LoginSchema,loginActions.setUserName('username'))).toEqual({username:'username'});
  });
  test('test LoginSlice setPassword', () => {
    const state:DeepPartial<LoginSchema> = {password:'123'}
    expect(loginReducer(state as LoginSchema,loginActions.setPassword('321'))).toEqual({password:'321'});
  });
})