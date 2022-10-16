import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
}

interface ILogin {
  user: IUser | null;
  authenticated: boolean;
}

const initialState: ILogin = {
  user: null,
  authenticated: false,
}

export const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      const { email, password } = action.payload as unknown as IUser;
      state.user = {
        email,
        password,
      };
      state.authenticated = true;
    },
    logout: (state) => {
      state.user = null
      state.authenticated = true;
    },
  }
})

export const { setUser, logout } = LoginSlice.actions;

export default LoginSlice.reducer;
