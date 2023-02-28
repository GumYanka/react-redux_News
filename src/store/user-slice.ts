import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
    users: [{ id: 1, username: "admin", password: "12345" }],
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        state.currentUser = user as any;
      }
    },
    logout: (state) => {
      localStorage.removeItem("currentUser");
      state.currentUser = null;
    },
  },
});

export const { login, logout } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
