import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    resetUser: (state) => {
      state.id = initialState.id;
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.username = initialState.username;
      state.password = initialState.password;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
