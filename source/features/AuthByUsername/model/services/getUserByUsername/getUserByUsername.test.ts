import { getUserByUsername } from './getUserByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk'





describe('getUserByUsername.test', ()=>{
  const returnValue = {id:'1', username:'username'}
  
  test('success auth', async () => {
    // const action = getUserByUsername({username:'username', password:"321"})
    // const result = await action(dispatch,getState,undefined)
    const thunk = new TestAsyncThunk(getUserByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({data:returnValue}))
    const result = await thunk.callThunk({username:'username', password:"321"})
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(returnValue))
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(returnValue)
  });
  test('error auth', async () => {
    const thunk = new TestAsyncThunk(getUserByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({status:403}))
    const result = await thunk.callThunk({username:'username', password:"321"})
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('err')
  });
})