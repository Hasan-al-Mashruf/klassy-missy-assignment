// cartSlice.js
import { IUser } from "@/types/types.global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  user: IUser | null;
  userFormData: IUser | null;
}

const initialState: InitialState = {
  user: null,
  userFormData: null,
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
        state.userFormData = payload;
      }
    },
    addFormData: (state, { payload }: PayloadAction<any>) => {
      state.userFormData = payload;
    },
    removeLoginUser: (state) => {
      state.user = null;
      state.userFormData = null;
    },
    removeFormData: (state) => {
      state.userFormData = null;
    },
  },
});

export const { loginNewUser, removeLoginUser, removeFormData, addFormData } =
  userSlice.actions;
export default userSlice.reducer;
