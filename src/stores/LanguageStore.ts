import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type ILanguage = "EN" | "VN";

export interface ILanguageState {
  Language: ILanguage;
}

const initialState: ILanguageState = {
  Language: "EN",
};

const LanguageSlice = createSlice({
  initialState,
  name: "Language",
  reducers: {
    changeColorTheme: (state, action) => {
      state.Language = action.payload;
    },
  },
});
export const { changeColorTheme } = LanguageSlice.actions;
export default LanguageSlice.reducer;
