import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

interface IProps {
  value: string;
  id: number;
  doneTask(id: number): void;
}

const Todo: FC<IProps> = ({ value, id, doneTask }) => {
  return (
    <View style={styles.container}>
      <View style={styles.todoBody}>
        <Text style={styles.todoText}>{value}</Text>
      </View>
      <TouchableOpacity style={styles.todoButton} onPress={() => doneTask(id)}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    padding: 5,
    borderColor: '#1677ff',
    borderWidth: 2,
    flexDirection: 'row',
  },
  todoText: {
    fontSize: 20,
  },
  todoBody: {
    flex: 2,
  },
  todoButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1677ff",
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
