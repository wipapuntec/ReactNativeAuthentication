//@flow
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/user/action';
import {changeLanguage} from '../../redux/auth/action';
import {setAllowFaceAndTouchId} from '../../redux/user/action';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import SettingCard from '../../components/SettingCard';
import {useIntl} from 'react-intl';
import {Content, CardSettingLayout} from '../../components/Layout';

const SettingScreen: () => React$Node = ({navigation}: any) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const language = useSelector(state => state.auth?.language);
  const allowTouchId = useSelector(state => state.user?.allowFaceAndTouch);

  const [isSupportFaceTouchId, setIsSupportFaceTouchId] = useState(false);
  const [isTH, setIsTH] = useState(true);
  const [active, setActive] = useState(true);

  useEffect(() => {
    //lang
    if (language === 'th') {
      setIsTH(true);
    } else {
      setIsTH(false);
    }
    //allow touchId
    if (allowTouchId) {
      setActive(true);
    } else {
      setActive(false);
    }

    try {
      FingerprintScanner.isSensorAvailable();
      setIsSupportFaceTouchId(true);
    } catch (error) {
      setIsSupportFaceTouchId(false);
    }
  }, []);

  const checkLang = () => {
    if (language === 'th') {
      dispatch(changeLanguage('en'));
    } else {
      dispatch(changeLanguage('th'));
    }
  };

  const checkAllowTouchId = () => {
    if (allowTouchId) {
      dispatch(setAllowFaceAndTouchId(false, true));
    } else {
      dispatch(setAllowFaceAndTouchId(true, true));
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1, flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <Content>
            <CardSettingLayout>
              <SettingCard
                type="next"
                firstIcon={require('../../icons/ChangePassword.png')}
                onPress={() =>
                  navigation.navigate('SettingStack', {
                    screen: 'ChangePasswordSettingScreen',
                    initial: true,
                  })
                }
                text={intl.formatMessage({id: 'setting.changepw'})}
              />
              <SettingCard
                type="next"
                firstIcon={require('../../icons/PIN.png')}
                onPress={() =>
                  navigation.navigate('SettingStack', {
                    screen: 'ChangePinScreen',
                    initial: true,
                    params: {
                      mode: intl.formatMessage({id: 'pin.oldpin'}),
                    },
                  })
                }
                text={intl.formatMessage({id: 'setting.changepin'})}
              />
              <SettingCard
                type="next"
                firstIcon={require('../../icons/Laguage.png')}
                onPress={() => {
                  setIsTH(!isTH);
                  checkLang();
                }}
                text={intl.formatMessage({id: 'setting.changeword'})}
                type="select"
                children={
                  isTH ? (
                    <Image
                      source={require('../../icons/TH-toggle.png')}
                      style={{width: 70, height: 70, paddingRight: 10}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require('../../icons/EN-toggle.png')}
                      style={{width: 70, height: 70, paddingRight: 10}}
                      resizeMode="contain"
                    />
                  )
                }
              />
              {isSupportFaceTouchId && (
                <SettingCard
                  firstIcon={require('../../icons/FaceID.png')}
                  onPress={() => {
                    setActive(!active);
                    checkAllowTouchId();
                  }}
                  text={intl.formatMessage({id: 'register.allowFaceId'})}
                  type="select"
                  children={
                    active ? (
                      <Image
                        source={require('../../icons/Active.png')}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                        resizeMode="contain"
                      />
                    ) : (
                      <Image
                        source={require('../../icons/Inactive.png')}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                        resizeMode="contain"
                      />
                    )
                  }
                />
              )}

              <SettingCard
                firstIcon={require('../../icons/LogOut.png')}
                onPress={() => dispatch(logout())}
                text={intl.formatMessage({id: 'logout'})}
                type="select"
                children={null}
              />
            </CardSettingLayout>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SettingScreen;
