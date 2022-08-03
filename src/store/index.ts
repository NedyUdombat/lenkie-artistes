import { configureStore } from "@reduxjs/toolkit";

import artistsReducer from "./modules/artist";


const store = configureStore({
  reducer: {
    artist: artistsReducer,
  },
  
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
