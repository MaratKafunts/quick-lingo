import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TranslateInterface {
	from: string;
	to: string;
	text: string;
}

export const translateText = createAsyncThunk(
	"translate/translateText",
	async ({ from, to, text }: TranslateInterface) => {
		const options = {
			method: "POST",
			url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
			headers: {
				"x-rapidapi-key": "fc1a109cbdmsh646bcd8ec4aef92p1838e5jsn08b6a593e939",
				"x-rapidapi-host": "google-translate113.p.rapidapi.com",
				"Content-Type": "application/json",
			},
			data: {
				from,
				to,
				text,
			},
		};

		const response = await axios.request(options);

		return response.data.trans;
	}
);

export interface Language {
	language: string;
	code: string;
}

export interface TranslateSliceInterface {
	languageFrom: Language | null;
	languageTo: Language | null;
	textFrom: string;
	textTo: string;
	loading: boolean;
}

const initialState: TranslateSliceInterface = {
	languageFrom: null,
	languageTo: null,
	textFrom: "",
	textTo: "",
	loading: false,
};

const translateSlice = createSlice({
	name: "translate",
	initialState,
	reducers: {
		setLanguageFrom: (state, action) => {
			state.languageFrom = action.payload;
		},
		setLanguageTo: (state, action) => {
			state.languageTo = action.payload;
		},
		setTextFrom: (state, action) => {
			state.textFrom = action.payload;
		},
		clearTextTo: (state) => {
			state.textTo = "";
		},
		setSwapLanguages: (state) => {
			if (state.languageFrom && state.languageTo) {
				const tempLanguage = state.languageFrom;
				const tempText = state.textFrom;

				state.languageFrom = state.languageTo;
				state.textFrom = state.textTo;

				state.languageTo = tempLanguage;
				state.textTo = tempText;
				translateText({ from: state.languageFrom.code, to: state.languageTo.code, text: state.textFrom });
			} else {
				alert("Languages are not chosen!");
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(translateText.fulfilled, (state, action) => {
				state.textTo = action.payload;
				state.loading = false;
			})
			.addCase(translateText.pending, (state) => {
				state.loading = true;
			});
	},
});

export const { setLanguageFrom, setLanguageTo, setTextFrom, setSwapLanguages, clearTextTo } = translateSlice.actions;
export default translateSlice.reducer;
