//import liraries
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import '../language/i18n';
import {useTranslation} from 'react-i18next';
import ButtonComp from '../Components/ButtonComp';
import navgiationStrings from '../constants/navgiationStrings';
// create a component
const SalectLanguage = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const DATA = [
    {text: 'English', type: 'en'},
    {text: 'हिंदी', type: 'hi'},
    {text: 'عربي', type: 'ar'},
  ];

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={
          currentLanguage === item.type ? styles.selected : styles.unselected
        }
        onPress={() => changeLanguage(item.type)}>
        <Text
          style={[
            styles.langTxt,
            {
              color: currentLanguage === item.type ? '#FFFF' : 'black',
            },
          ]}>
          {item.text}
        </Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
      }}>
      <Text style={styles.SalectLanguage}>{t('SalectLanguage')}</Text>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={DATA}
        renderItem={renderItem}
      />
      <ButtonComp
        onPress={() => navigation.navigate(navgiationStrings.LOGIN)}
        btnText={'Login'}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  flatList: {
    // marginHorizontal: 10,
    // flex: 1,
  },

  selected: {
    backgroundColor: 'orange',
    margin: 10,
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },

  unselected: {
    // backgroundColor: 'orange',
    margin: 10,
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  langTxt: {
    // fontFamily:'',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  SalectLanguage: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    // alignSelf:'center'
  },
});

//make this component available to the app
export default SalectLanguage;
