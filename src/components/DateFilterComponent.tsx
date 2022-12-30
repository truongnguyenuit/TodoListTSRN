import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import FadeInView from './FadeInView';
interface IProps {
  data: string,
  handleOnpress(date: string): void,
}

const DateFilterComponent: FC<IProps> = ({ data, handleOnpress }) => {
  return (
    <FadeInView>
      <TouchableOpacity onPress={() => handleOnpress(data)}>
        <View style={styles.container}>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.text}>{data}</Text>
        </View>
      </TouchableOpacity>
    </FadeInView>
  );
};

export default DateFilterComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 50,
    height: 50,
    borderColor: '#4717FD',
    borderRadius: 7,
    marginRight: 5,
  },
  date: {
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
});
