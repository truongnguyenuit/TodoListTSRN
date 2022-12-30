import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LightThemeColor, DarkThemeColor } from "../constants/constants";

export type IThemeMode = "Light" | "Dark";

export type ITheme = {
  textColor?: string;
  backgroundColor?: string;
  elementColor?: string;
  bodyColor?: string;
  borderColor?: string;
};

const GetTheme = (ThemeMode: IThemeMode): any => {
  if (ThemeMode === "Light") return LightThemeColor;
  else return DarkThemeColor;
};

export interface IThemeState {
  Theme: ITheme;
}

const initialState: IThemeState = {
  Theme: GetTheme("Light"),
};

const ThemeSlice = createSlice({
  initialState,
  name: "ThemeMode",
  reducers: {
    changeColorTheme: (state, action) => {
      state.Theme = GetTheme(action.payload);
    },
  },
});
export const { changeColorTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
