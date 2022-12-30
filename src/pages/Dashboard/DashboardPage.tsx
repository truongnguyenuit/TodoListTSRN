import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { isValidElement } from 'react';
import { useState } from 'react';
import Todo from '../../components/Todo';
import DateFilterComponent from '../../components/DateFilterComponent';
import { useEffect } from 'react';
import { GetData } from '../../Services/TodoList-Service';
import FadeInView from '../../components/FadeInView';
const Page2 = () => {

  return (

    <View style={styles.container}>
      <FadeInView />
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


export default Page2;
