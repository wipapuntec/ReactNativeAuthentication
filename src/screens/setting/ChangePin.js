//@flow

import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {TextBlue} from '../../components/Text';
import * as _ from 'lodash';
import {CircleWithPin, CircleBlueWithPin} from '../../components/Button';
import {PinCodeNumber} from '../../components/PinCodeNumber';
import PinCodeZeroNumber from '../../components/PinCodeZeroNumber';
import {useIntl} from 'react-intl';
import {checkPin, createPinRequest} from '../../redux/auth/action';

const ChangePinScreen: () => React$Node = ({route, navigation}: any) => {
  const dispatch = useDispatch();
  const [pinCode, setPinCode] = useState('');
  const mode = route.params.mode;
  const originalPin = route.params.pin;
  const intl = useIntl();

  const concatPinCode = num => {
    let newPinCode = pinCode + num;

    if (newPinCode.length === 6) {
      if (mode === intl.formatMessage({id: 'pin.oldpin'})) {
        dispatch(checkPin(newPinCode, true));
      } else if (mode === intl.formatMessage({id: 'pin.newpin'})) {
        navigation.navigate('SettingStack', {
          screen: 'ChangePinScreen',
          params: {
            mode: intl.formatMessage({id: 'pin.confirmpin'}),
            pin: newPinCode,
          },
        });
      } else {
        dispatch(createPinRequest(originalPin, newPinCode, true));
      }
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
          <TextBlue>{mode}</TextBlue>
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

export default ChangePinScreen;
