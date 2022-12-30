import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { isValidElement } from 'react';
import { useState, useEffect } from 'react';

import Todo from '../components/Todo';
import DateFilterComponent from '../components/DateFilterComponent';
import { useAppSelector, useAppDispatch } from '../stores';
import { deleteTodoAction, filterTodo, ITodoListState, putTodoAction } from '../stores/TodoListStore';

import { getTodoAction } from '../stores/TodoListStore';
import { postTodoAction } from '../stores/TodoListStore';
import FadeInView from '../components/FadeInView';
const Page4 = () => {
  const dispatch = useAppDispatch();

  const todoList = useAppSelector((state) => state.TodoList.todoList);
  const sideTodoList = useAppSelector((state) => state.TodoList.sideTodoList);

  const [todo, setTodo] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const handleOnpress = (date: string): void => {
    console.log('date', date);
    dispatch(filterTodo(date));
    // setTodoList(sideTodoList.filter((value) =>
    //   value.date === date
    // ));
  };

  const addTodo = () => {
    const newTodo = { id: Date.now(), todo: todo, date: date, status: false };
    dispatch(postTodoAction(newTodo));

  };

  const doneTask = (id: number): void => {
    const found = todoList.find(todo => todo.id === id);
    dispatch(putTodoAction(found!));
  };
  const deleteTask = (id: number): void => {
    dispatch(deleteTodoAction(id));
  };

  let dateArray: string[] = [];
  dateArray = [...new Set(sideTodoList.map((item) => item.date))];
  useEffect(() => {
    console.log('1');
    dispatch(getTodoAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <View style={styles.container}>
      <Text style={styles.headerTitle}>Daily Tasks</Text>
      <View style={styles.listDate}>
        {dateArray.map((value, index) => {
          return <DateFilterComponent data={value} handleOnpress={handleOnpress} key={index} />;
        })}
      </View>
      <Text style={styles.headerTask}>Upcoming Tasks</Text>
      <ScrollView>
        <View style={styles.bodyContainer}>

          {todoList.map((value) => {
            return <Todo data={{ value, doneTask, deleteTask }} key={value.id} />;
          })}

        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input todo here"
          value={todo}
          onChangeText={text => setTodo(text)}
          style={styles.todoInput}
        />
        <TextInput
          placeholder="Input date here"
          value={date}
          onChangeText={text => setDate(text)}
          style={styles.todoInput}
        />
        <TouchableOpacity style={styles.todoButton} onPress={addTodo} disabled={!todo}>
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  headerTitle: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
  },
  listDate: {
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  headerTask: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  bodyContainer: {
    flex: 10,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  todoInput: {
    flex: 2,
    backgroundColor: 'white',
    borderColor: '#1677ff',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 5,
    padding: 10,
    fontSize: 17,
  },
  todoButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1677ff',
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Page4;
