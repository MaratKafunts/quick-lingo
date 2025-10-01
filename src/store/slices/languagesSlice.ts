import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLanguages = createAsyncThunk("languages/fetchLanguages", async () => {
	const options = {
		method: "GET",
		url: "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages",
		headers: {
			"x-rapidapi-key": "fc1a109cbdmsh646bcd8ec4aef92p1838e5jsn08b6a593e939",
			"x-rapidapi-host": "google-translate113.p.rapidapi.com",
		},
	};

	const response = await axios.request(options);
	return response.data;
});

interface ILanguage {
	code: string;
	language: string;
}

interface StateInterface {
	languages: ILanguage[];
	loading: boolean;
	error: null | string;
}

const initialState: StateInterface = {
	languages: [],
	loading: false,
	error: null,
};

const languageSlice = createSlice({
	name: "languages",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchLanguages.fulfilled, (state, action) => {
				state.languages = action.payload.slice(1);
			})
			.addCase(fetchLanguages.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchLanguages.rejected, (state) => {
				state.error = "error during fetching languages";
				state.loading = false;
			});
	},
});

export default languageSlice.reducer;
