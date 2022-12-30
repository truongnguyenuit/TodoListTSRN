import axios from "axios";
import { ITodo } from "../stores/TodoListStore";

export const GetData = async () => {
  try {
    console.log('3');
    // const response = await axios.get('https://63a58479318b23efa795c801.mockapi.io/TodoList');
    const response = await fetch('https://63a58479318b23efa795c801.mockapi.io/TodoList');
    console.log('4');
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const PostData = async (data: any) => {
  try {
    const response = await axios.post('https://63a58479318b23efa795c801.mockapi.io/TodoList', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const PutData = async (data: ITodo, id: number) => {
  try {
    const response = await axios.put(`https://63a58479318b23efa795c801.mockapi.io/TodoList/${id}`, data);
    return response.data;

  } catch (error) {
    console.log(error);
  }
};

export const DeleteData = async (id: number) => {
  try {
    const response = await axios.delete(`https://63a58479318b23efa795c801.mockapi.io/TodoList/${id}`);
    return response.data;

  } catch (error) {
    console.log(error);
  }
};

