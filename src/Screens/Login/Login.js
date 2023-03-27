//import liraries
import React, {useState} from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStings from '../../constants/navgiationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import {useTranslation} from 'react-i18next';
const Login = ({navigation}) => {
  const [isVisible, setVisible] = useState(true);
  const {t} = useTranslation();

  return (
    <WrapperContainer containerStyle={{paddingHorizontal: 0}}>
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://cdn.mos.cms.futurecdn.net/3qpVahdh69fiUrJdswtfUn.jpg',
          }}
          style={styles.imgStyle}>
          <Text style={styles.loginTextStyle}>{t('LOGIN')}</Text>

        </ImageBackground>

        <View style={styles.mainStyle}>
          <TextInputWithLabel
            label="Email Address"
            placeHolder="Enter your email"
            inputStyle={{marginBottom: moderateVerticalScale(28)}}
            keyboardType="email-address"
          />
          <TextInputWithLabel
            label="Password"
            placeHolder="Enter your password"
            secureTextEntry={isVisible}
            rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
            onPressRight={() => setVisible(!isVisible)}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgotView}
            onPress={() =>
              navigation.navigate(navigationStings.FORGOT_PASSWORD)
            }>
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>

          <ButtonComp btnText={'Login'} />
        </View>
      </View>

      <View style={styles.bottomView}>
        <Text>Not a member</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStings.CHOOSE_ACCOUNT)}>
          <Text>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    </WrapperContainer>
  );
};

export default Login;
