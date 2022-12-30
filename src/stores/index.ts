import { configureStore } from "@reduxjs/toolkit";
import TodoListStore from "./TodoListStore";
import ThemeStore from "./ThemeStore";
import LanguageStore from "./LanguageStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    TodoList: TodoListStore,
    Theme: ThemeStore,
    Language: LanguageStore,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
