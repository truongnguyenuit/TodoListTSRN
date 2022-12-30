import { StyleSheet, Text, View, Image, TouchableOpacity, ImageProps, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { useAppSelector } from '../../stores';
const DailyTaskBody = () => {

  const ThemeColor = useAppSelector((state) => state.Theme.Theme);
  // let linkImage: string = '../../image/missle1.jpg';
  const [linkImage, setLinkImage] = useState<ImageSourcePropType>(require('../../image/missle2.jpg'));

  let flag: boolean = true;

  const handleOnpress = () => {
    if (linkImage == require('../../image/missle2.jpg')) {
      setLinkImage(require('../../image/missle1.jpg'));
    } else {
      setLinkImage(require('../../image/missle2.jpg'))
    }
  };
  return (
    <View style={[styles.body, { backgroundColor: ThemeColor.elementColor, }]}>
      <View style={styles.bodyLeft}>
        <View style={styles.topBody}>
          <Text style={styles.topText}>Hurrah!</Text>
          <Text style={styles.topBodyText}>You are almost there</Text>
        </View>
        <View style={styles.botBody}>
          <Text style={styles.botText}> 20 out of 25 tasks are completed</Text>
          <View style={styles.botView}>
            <View style={styles.doneView}></View>
          </View>
        </View>
      </View>

      <View style={styles.bodyRight}>
        <TouchableOpacity onPress={() => handleOnpress()}>
          <Image
            source={linkImage}
            resizeMode="cover"
            style={styles.bodyImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DailyTaskBody;

const styles = StyleSheet.create({
  body: {
    flex: 1.5,
    borderRadius: 13,
    flexDirection: 'row',
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bodyLeft: {
    flex: 1.4,
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  topBody: {
    flex: 5,
  },
  topText: {
    color: '#4717FD',
    fontWeight: 'bold',
    fontSize: 30,
  },
  topBodyText: {
    color: '#4717FD',
    fontWeight: 'bold',
    fontSize: 17,
  },
  botBody: {
    flex: 1,
    justifyContent: 'space-between'
  },
  botText: {
    color: '#A0659C',
    fontWeight: 'bold',
    fontSize: 12.1,
  },
  botView: {
    height: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  doneView: {
    flex: 1,
    width: '70%',
    backgroundColor: '#4717FD',
    borderRadius: 50,
  },
  bodyRight: {
    flex: 1,
  },
  bodyImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
})
