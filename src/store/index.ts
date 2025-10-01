import { configureStore } from "@reduxjs/toolkit";
import languagesReducer from "./slices/languagesSlice";
import translateReducer from "./slices/translateSlice";

export const store = configureStore({
	reducer: {
		languages: languagesReducer,
		translate: translateReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
