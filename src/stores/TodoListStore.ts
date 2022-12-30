import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { create } from "react-test-renderer";
import {
  GetData,
  PostData,
  PutData,
  DeleteData,
} from "../Services/TodoList-Service";

export interface ITodo {
  id: number;
  todo: string;
  date: string;
  status: boolean;
}

export interface ITodoListState {
  todoList: ITodo[];
  sideTodoList: ITodo[];
}

const initialState: ITodoListState = {
  todoList: [],
  sideTodoList: [],
};

export const getTodoAction = createAsyncThunk("get-todo", async () => {
  return await GetData();
});

export const postTodoAction = createAsyncThunk(
  "post-todo",
  async (data: any) => {
    return await PostData(data);
  },
);

export const putTodoAction = createAsyncThunk(
  "put-todo",
  async (data: ITodo) => {
    return await PutData(
      { id: data.id, todo: data.todo, date: data.date, status: true },
      data.id,
    );
  },
);

export const deleteTodoAction = createAsyncThunk(
  "delete-todo",
  async (id: number) => {
    return await DeleteData(id);
  },
);
const TodoListSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    filterTodo: (state, action) => {
      state.todoList = state.sideTodoList.filter(
        value => value.date === action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(getTodoAction.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.sideTodoList = action.payload;
    });
    builder.addCase(getTodoAction.rejected, (state, action) => {});
    builder.addCase(getTodoAction.pending, (state, action) => {});

    builder.addCase(postTodoAction.fulfilled, (state, action) => {
      state.todoList = [...state.todoList, action.payload];
      state.sideTodoList = [...state.sideTodoList, action.payload];
    });
    builder.addCase(postTodoAction.rejected, (state, action) => {});
    builder.addCase(postTodoAction.pending, (state, action) => {});

    builder.addCase(putTodoAction.fulfilled, (state, action) => {
      // state.todoList = [...state.todoList, action.payload];
      // state.sideTodoList = [...state.sideTodoList, action.payload];

      const found = state.todoList.find(todo => todo.id === action.payload.id);

      let newSideTodoList = [...state.sideTodoList];
      newSideTodoList.map(todo => {
        if (todo.id === found?.id) {
          todo.status = true;
        }
      });
      state.sideTodoList = newSideTodoList;

      let newTodoList = [...state.todoList];
      newTodoList.map(todo => {
        if (todo.id === found?.id) {
          todo.status = true;
        }
      });
      state.todoList = newTodoList;
    });
    builder.addCase(putTodoAction.rejected, (state, action) => {});
    builder.addCase(putTodoAction.pending, (state, action) => {});

    builder.addCase(deleteTodoAction.fulfilled, (state, action) => {
      state.todoList = state.todoList.filter(
        todo => action.payload.id !== todo.id,
      );
      state.sideTodoList = state.sideTodoList.filter(
        todo => action.payload.id !== todo.id,
      );
    });
    builder.addCase(deleteTodoAction.rejected, (state, action) => {});
    builder.addCase(deleteTodoAction.pending, (state, action) => {});
  },
});
export const { filterTodo } = TodoListSlice.actions;

export default TodoListSlice.reducer;
