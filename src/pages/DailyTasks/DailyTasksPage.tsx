import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Todo from '../../components/Todo';
import DailyTasksHeader from './DailyTasksHeader';
import DailyTaskBody from './DailyTaskBody';
import DailyTaskFooter from './DailyTaskFooter';
import { useAppSelector } from '../../stores';
function Page1() {
  const ThemeColor = useAppSelector((state) => state.Theme.Theme);

  return (
    <View style={[styles.container, { backgroundColor: ThemeColor.backgroundColor }]}>
      <DailyTasksHeader />
      <DailyTaskBody />
      <DailyTaskFooter />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 13,
  },
});

export default Page1;
