import { IRegiment } from "@/types/types.global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  items: IRegiment[];
}

interface ReorderPayload {
  columnId: string;
  startIndex: number;
  endIndex: number;
}

const initialState: InitialState = {
  items: [
    {
      uuid: "1",
      name: "Regimen: RGM1234",
      date: "June 30, 2024",
      status: "incoming",
      creator: "fahim",
    },
    {
      uuid: "2",
      name: "Regimen: RGM1255",
      date: "June 30, 2024",
      status: "incoming",
      creator: "karim",
    },
    {
      uuid: "3",
      name: "Regimen: RGM1257",
      date: "June 30, 2024",
      status: "incoming",
      creator: "atik",
    },
    {
      uuid: "4",
      name: "Regimen: RGM1257s",
      date: "June 30, 2024",
      status: "processing",
      creator: "jamal",
    },
  ],
};
const regimentSlice = createSlice({
  name: "regiment",
  initialState,
  reducers: {
    addToBoard: (state, { payload }: PayloadAction<IRegiment>) => {
      if (payload) {
        state.items.push({ ...payload, status: "incoming" });
      }
    },
    updateStatus: (state, { payload }: PayloadAction<Partial<IRegiment>>) => {
      const item = state.items.find((item) => item.uuid === payload.uuid);
      if (item) {
        item.status = payload.status;
      }
    },
    removeFromBoard: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.uuid !== payload);
    },
    emptyBoard: (state) => {
      state.items = [];
    },
    reorderItems: (state, { payload }: PayloadAction<ReorderPayload>) => {
      const { columnId, startIndex, endIndex } = payload;

      const columnItems = state.items.filter(
        (item) => item.status === columnId
      );
      // splice method is used to remove items from start-index
      const [movedItem] = columnItems.splice(startIndex, 1);

      // splice method is used to update index in end-index
      columnItems.splice(endIndex, 0, movedItem);

      // Update the main items array
      state.items = [
        ...state.items.filter((item) => item.status !== columnId),
        ...columnItems,
      ];
    },
  },
});

export const {
  addToBoard,
  updateStatus,
  removeFromBoard,
  emptyBoard,
  reorderItems,
} = regimentSlice.actions;
export default regimentSlice.reducer;
