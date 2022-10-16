import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
  name: string;
}

interface IRegister {
  user: IUser | null;
  authenticated: boolean;
}

const initialState: IRegister = {
  user: null,
  authenticated: false,
}

export const RegisterSlice = createSlice({
  name: 'RegisterSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      const { email, password, name } = action.payload as unknown as IUser;
      state.user = {
        email,
        password,
        name,
      };
      state.authenticated = true;
    },
    logout: (state) => {
      state.user = null
      state.authenticated = true;
    },
  }
})

export const { setUser, logout } = RegisterSlice.actions;

export default RegisterSlice.reducer;
