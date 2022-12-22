import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Todo from '../components/Todo';

function Page1() {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<{ id: any, todo: string }[]>([]);

  const addTodo = (): void => {
    const newTodo = { id: Date.now(), todo: todo };
    setTodoList(prev => [...prev, newTodo]);
    setTodo('');
  };

  const doneTask = (id: number): void => {
    setTodoList(todoList.filter((todo => {
      return (id !== todo.id);
    })
    ));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>

          {todoList.map((value) => {
            return <Todo value={value.todo} id={value.id} doneTask={doneTask} key={value.id}/>;
          })}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input todo here"
            value={todo}
            onChangeText={text => setTodo(text)}
            style={styles.todoInput}
          />
          <TouchableOpacity style={styles.todoButton} onPress={addTodo}>
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bodyContainer: {
    flex: 10,
  },
  inputContainer: {
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

export default Page1;
