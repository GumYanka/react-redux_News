import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  users: [{ id: 1, username: "admin", password: "12345" }],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user: any) => user.username === username && user.password === password
      );
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        state.user = user as any;
      }
    },
    logOut: (state) => {
      localStorage.removeItem("currentUser");
      state.user = null;
    },
  },
});

export const { login, logOut } = userSlice.actions;

export const selectCurrentUser = (state:any) => state.user.user;

export const userReducer = userSlice.reducer;