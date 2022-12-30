import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../stores';
import { changeColorTheme } from '../../stores/ThemeStore';
const DailyTasksHeader = () => {
  const dispatch = useAppDispatch();

  const handleOnpress = (Color: string) => {
    dispatch(changeColorTheme(Color));
  };

  const ThemeColor = useAppSelector((state) => state.Theme.Theme);

  const Language = useAppSelector((state) => state.Language.Language);
  const HeaderLanguage = (): any => {
    if (Language === "VN") {
      return {
        title: "Chào, Nauman",
      }
    } else {
      return {
        title: "Hey, Nauman",
      }
    }

  }

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={[styles.headerName, { color: ThemeColor.textColor }]}>{HeaderLanguage().title}</Text>
        <Text style={{ fontWeight: 'bold', color: ThemeColor.textColor }}>Let's make this day productive</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity style={[styles.themeButton, { borderColor: ThemeColor.borderColor }]} onPress={() => handleOnpress("Light")}>
          <Text style={[styles.themeButtonTextWhite, { color: ThemeColor.textColor, borderColor: ThemeColor.borderColor }]}>White</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.themeButton, { backgroundColor: 'black', borderColor: ThemeColor.borderColor }]} onPress={() => handleOnpress("Dark")}>
          <Text style={styles.themeButtonTextBlack}>Black</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://www.scholastic.com/content/dam/scholastic/educators/book-lists/Harry-Potter-Book-List_BL_16-9.jpg.corpimagerendition.xxl.1400.788.png',
          }}
          resizeMode="cover"
          style={styles.headerImage}
        />
      </View>
    </View >
  );
};

export default DailyTasksHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerName: {
    fontWeight: 'bold',
    fontSize: 33,
  },
  headerRight: {
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeButton: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 5,
  },
  themeButtonTextWhite: {
    fontWeight: 'bold',
  },
  themeButtonTextBlack: {
    color: 'white',
    fontWeight: 'bold',
  },

  headerImage: {
    height: '45%',
    width: '39%',
    borderRadius: 10,
  },
});
