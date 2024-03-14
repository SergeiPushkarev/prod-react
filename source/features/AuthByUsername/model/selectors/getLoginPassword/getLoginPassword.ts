import { StateSchema } from "app/providers/StoreProvider";

export const getloginPassword = (state: StateSchema) => state?.loginForm?.password || ''