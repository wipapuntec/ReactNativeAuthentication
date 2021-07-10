//@flow
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextBlue, Text} from '../../components/Text';
import * as _ from 'lodash';
import {CircleWithPin, CircleBlueWithPin} from '../../components/Button';
import {PinCodeNumber} from '../../components/PinCodeNumber';
import PinCodeZeroNumber from '../../components/PinCodeZeroNumber';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {checkPin, checkFaceAndTouchId} from '../../redux/auth/action';

const LoginWithPin: () => React$Node = () => {
  const dispatch = useDispatch();
  const [pinCode, setPinCode] = useState('');
  const language = useSelector(state => state.auth?.language);
  const allowFaceAndTouch = useSelector(state => state.user?.allowFaceAndTouch);

  const checkAllowFaceAndTouch = () => {
    if (allowFaceAndTouch) {
      FingerprintScanner.isSensorAvailable()
        .then(() => {
          FingerprintScanner.authenticate({
            description:
              'Scan your fingerprint on the device scanner to continue',
          })
            .then(() => {
              console.log('FingerprintScanner success');
              dispatch(checkFaceAndTouchId());
            })
            .catch(error => console.log('authentiction fail : ', error));
        })
        .catch(error => console.log('isSensorAvailable fail :', error));
    }
  };

  useEffect(() => {
    checkAllowFaceAndTouch();
  }, []);

  const concatPinCode = num => {
    let newPinCode = pinCode + num;

    if (newPinCode.length === 6) {
      dispatch(checkPin(newPinCode, false));

      newPinCode = '';
    }
    setPinCode(newPinCode);
  };

  const onDelete = () => {
    if (pinCode.length > 0) {
      const newPinCode = pinCode.substring(0, pinCode.length - 1);
      setPinCode(newPinCode);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
          }}>
          {language === 'th' ? (
            <Text>
              เข้าสู่ระบบโดย <TextBlue>รหัส PIN</TextBlue>
            </Text>
          ) : (
            <Text>
              Authentication <TextBlue>with a PIN code</TextBlue>
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              paddingHorizontal: 100,
              marginVertical: 20,
            }}>
            {_.times(pinCode.length, i => (
              <CircleBlueWithPin />
            ))}
            {_.times(6 - pinCode.length, i => (
              <CircleWithPin />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              paddingHorizontal: 40,
              marginTop: 20,
            }}>
            <PinCodeNumber items={['1', '2', '3']} onPress={concatPinCode} />
            <PinCodeNumber items={['4', '5', '6']} onPress={concatPinCode} />
            <PinCodeNumber items={['7', '8', '9']} onPress={concatPinCode} />
            <PinCodeZeroNumber
              onPress={() => concatPinCode('0')}
              onDelete={onDelete}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginWithPin;
