import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { useEffect } from 'react';
import { useAppSelector } from '../stores';
interface IProps {
  data: string,
}
let MainColor: string = '';
let SideColor: string = '';
const DailyProgressComponent: FC<IProps> = ({ data }) => {

  if (data === 'Personal') {
    MainColor = "#4717FD";
    SideColor = '#E3E0FD';
  }
  if (data === 'Work') {
    MainColor = '#02A7FE';
    SideColor = '#D9FBFF';
  }
  if (data === 'Health') {
    MainColor = '#03AC03';
    SideColor = '#DFF6E6';
  }
  if (data === 'Social') {
    MainColor = '#FF8D3A';
    SideColor = '#FFEED3';
  }
  const ThemeColor = useAppSelector((state) => state.Theme.Theme);

  return (
    <View style={[styles.container, { backgroundColor: ThemeColor.elementColor }]}>
      <View style={styles.top}>
        <View style={[styles.topLeft, { backgroundColor: MainColor }]}>
          <View style={styles.percentBackground}>
            <Text style={[styles.percent, { color: MainColor }]}>70%</Text>
          </View>
        </View>
        <View style={[styles.topRight, { backgroundColor: MainColor }]} />
      </View>
      <View style={styles.body}>
        <Text style={[styles.bodyTitle, { color: ThemeColor.textColor }]}>{data}</Text>
        <Text style={[{ color: ThemeColor.textColor }]}>10 tasks</Text>
      </View>
      <View style={styles.bot}>
        <View style={[styles.botLeft, { backgroundColor: SideColor }]}>
          <Text style={[styles.botLeftText, { color: MainColor }]}>2 Compteted</Text>
        </View>
        <View style={styles.botRight}>
          <Text style={styles.botRightText}>3 left</Text>
        </View>
      </View>
    </View>
  );
};

export default DailyProgressComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
    width: 172,
    height: 160,
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: MainColor,
    borderRadius: 100,
    width: 41,
    height: 41,
  },
  percentBackground: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 35,
    height: 35,
  },
  percent: {
    fontWeight: 'bold',

  },
  topRight: {
    width: 13,
    height: 13,
    borderRadius: 100,
  },

  body: {
    flex: 1.5,
    paddingVertical: 10,
  },
  bodyTitle: {
    fontWeight: 'bold',
    fontSize: 24,

  },
  bodyTask: {
    fontWeight: 'bold',
  },
  bot: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 93,
  },
  botLeftText: {

    fontWeight: 'bold',
    fontSize: 11,
  },
  botRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE2E2',
    borderRadius: 100,
    width: 45,
  },
  botRightText: {
    color: '#FF6565',
    fontWeight: 'bold',
    fontSize: 11,
  },
});
