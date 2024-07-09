// cartSlice.js
import { IUser } from "@/types/types.global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  user: IUser | null;
}

const initialState: InitialState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginNewUser: (state, { payload }: PayloadAction<IUser>) => {
      if (state.user) {
        return;
      } else {
        state.user = payload;
      }
    },
    removeLoginUser: (state, { payload }) => {},
  },
});

export const { loginNewUser, removeLoginUser } = userSlice.actions;
export default userSlice.reducer;
