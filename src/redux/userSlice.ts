import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  team: null,
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
      state.team = action.payload.team || "";
    },
    resetUser: (state) => {
      state.id = initialState.id;
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.username = initialState.username;
      state.password = initialState.password;
      state.team = initialState.team;
    },
    setUserTeam: (state, action: PayloadAction<string | null>) => {
      state.team = action.payload;
    },
  },
});

export const { setUser, resetUser, setUserTeam } = userSlice.actions;

export default userSlice.reducer;
