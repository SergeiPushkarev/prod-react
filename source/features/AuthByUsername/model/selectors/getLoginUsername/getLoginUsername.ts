import { StateSchema } from "app/providers/StoreProvider";

export const getloginUsername = (state: StateSchema) => state?.loginForm?.username || ''