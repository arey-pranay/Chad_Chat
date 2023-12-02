import { configureStore } from "@reduxjs/toolkit";
import whiteboardSliceReducer from "../WhiteBoard/WhiteBoardSlice";
export const store = configureStore({
  reducer: {
    whiteboard: whiteboardSliceReducer,
  },
});
