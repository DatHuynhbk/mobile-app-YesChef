import { API } from "../base";

export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
}
  

const loginApi = API.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{ user: User }, { username: string, password: string }>({
          query: ({ username, password }) => ({
            url: 'auth/login',
            method: 'POST',
            body: { username, password },
          }),
        }),
      }),
});

export const { useLoginMutation } = loginApi;
