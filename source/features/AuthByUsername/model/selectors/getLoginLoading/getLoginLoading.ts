import { StateSchema } from "app/providers/StoreProvider";

export const getloginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false