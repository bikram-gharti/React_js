import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    item: JSON.parse(localStorage.getItem("collection")) || [],
  },
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.item.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyExist) {
        state.item.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.item));
      }
    },
    removeCollection: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.item));
    },
    clearCollection: (state, action) => {
      state.item = [];
      localStorage.removeItem("collection");
    },
    addToast: () => {
      toast.success("item added to Collection!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    removeToast: () => {
      toast.error("item removed from Collection!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addToast, removeToast } =
  collectionSlice.actions;
export default collectionSlice.reducer;
