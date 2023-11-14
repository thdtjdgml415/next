import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  image: string;
  name: string;
}

const initialState: UserState = {
  email: "",
  image: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      console.log("state", state);
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.name = action.payload.name;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
