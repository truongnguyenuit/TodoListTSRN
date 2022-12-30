import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { FC, useRef } from 'react';
import { useEffect } from 'react';
import { useAppSelector } from '../stores';
import FadeInView from './FadeInView';
interface IProps {
  data: Idata,
}
interface Idata {
  value: {
    id: number,
    todo: string,
    date: string,
    status: boolean,
  };
  doneTask(id: number): void;
  deleteTask(id: number): void;
}

const Todo: FC<IProps> = ({ data }) => {
  const borderColor = (): any => {
    if (data.value.status) {
      return ('#03AC03');
    } else {
      return ('#02A7FE');
    }
  };
  const backgroundColor = (): any => {
    if (data.value.status) {
      return ('#DFF6E6');
    } else {
      return ('#D9FBFF');
    }
  };


  return (
    <FadeInView>
      <View style={[styles.container, { borderColor: borderColor(), backgroundColor: backgroundColor() }]}>
        <View style={styles.todoBody}>

          <View style={styles.todoView}>
            <Text style={styles.todoText}>Date: </Text>
            <Text style={styles.dataInput}>{data.value.date}</Text>
          </View>
          <View style={styles.todoView}>
            <Text style={styles.todoText}>Todo: </Text>
            <Text style={styles.dataInput}>{data.value.todo}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.doneButton} onPress={() => data.doneTask(data.value.id)}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => data.deleteTask(data.value.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </FadeInView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    padding: 5,
    borderColor: '#02A7FE',
    backgroundColor: '#D9FBFF',
    borderWidth: 1.7,
    flexDirection: 'row',
    height: 100,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  todoView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',


  },
  todoText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  dataInput: {
    fontSize: 18,
  },
  todoBody: {
    flex: 2,
  },
  textLogo: {
    fontWeight: 'bold',
    color: 'black',
  },
  doneButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1677ff",
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dc143c",
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
