import  axios from 'axios'
import { getUserByUsername } from './getUserByUsername'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'


jest.mock('axios')
const mockedAxios = jest.mocked(axios,true)


describe('getUserByUsername.test', ()=>{
  const returnValue = {id:'1', username:'username'}
  
  test('success auth', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({data:returnValue}))
    // const action = getUserByUsername({username:'username', password:"321"})
    // const result = await action(dispatch,getState,undefined)
    const thunk = new TestAsyncThunk(getUserByUsername)
    const result = await thunk.callThunk({username:'username', password:"321"})
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(returnValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(returnValue)
  });
  test('error auth', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({status:403}))
    const thunk = new TestAsyncThunk(getUserByUsername)
    const result = await thunk.callThunk({username:'username', password:"321"})
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('err')
  });
})