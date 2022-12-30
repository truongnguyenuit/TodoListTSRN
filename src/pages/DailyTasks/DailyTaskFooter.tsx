import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DailyProgressComponent from '../../components/DailyProgressComponent';
import { useAppSelector } from '../../stores';
const DailyTaskFooter = () => {
  const ThemeColor = useAppSelector((state) => state.Theme.Theme);

  return (
    <View style={styles.footer}>
      <View>
        <Text style={[styles.footerText, { color: ThemeColor.textColor }]}>Daily Progress</Text>
      </View>
      <View style={styles.footerComponent}>
        <DailyProgressComponent data={'Personal'} />
        <DailyProgressComponent data={'Work'} />
        <DailyProgressComponent data={'Health'} />
        <DailyProgressComponent data={'Social'} />
      </View>
    </View>
  );
};

export default DailyTaskFooter;

const styles = StyleSheet.create({
  footer: {
    flex: 4,
  },
  footerText: {
    paddingVertical: 20,
    fontWeight: 'bold',
    fontSize: 27,
  },
  footerComponent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
