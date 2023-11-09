import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SessionState = {
  value: string;
};

const initialState = {
  value: "",
} as SessionState;

export const session = createSlice({
  name: "session",
  initialState,
  reducers: {
    user: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { user } = session.actions;
export default session.reducer;
