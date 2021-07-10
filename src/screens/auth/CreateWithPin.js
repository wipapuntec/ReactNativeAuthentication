//@flow
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {TextBlue, Text} from '../../components/Text';
import * as _ from 'lodash';
import {CircleWithPin, CircleBlueWithPin} from '../../components/Button';
import {PinCodeNumber} from '../../components/PinCodeNumber';
import PinCodeZeroNumber from '../../components/PinCodeZeroNumber';

const CreateWithPinScreen: () => React$Node = ({navigation}: any) => {
  const [pinCode, setPinCode] = useState('');
  const language = useSelector(state => state.auth?.language);

  const concatPinCode = num => {
    let newPinCode = pinCode + num;

    if (newPinCode.length === 6) {
      navigation.navigate('ConfirmWithPinScreen', {
        pin: newPinCode,
      });
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
              กรุณาตั้ง <TextBlue>รหัส PIN</TextBlue>
              {'\n'}
              สำหรับการใช้งานในครั้งต่อไป
            </Text>
          ) : (
            <Text>
              Please <TextBlue>set a PIN code</TextBlue> {'\n'}for the next use.
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

export default CreateWithPinScreen;
