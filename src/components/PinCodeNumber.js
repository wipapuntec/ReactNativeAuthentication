//@flow
import React from 'react';
import {View} from 'react-native';
import {TouchablePinCodeNumber} from './Button';
import {TextMainBlue} from './Text';

type PinCodeNumberTypes = {onPress: Function, items: Array<string>};

export const PinCodeNumber = ({onPress, items}: PinCodeNumberTypes) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {items.map(m => (
        <TouchablePinCodeNumber key={m} onPress={() => onPress(m)}>
          <TextMainBlue>{m}</TextMainBlue>
        </TouchablePinCodeNumber>
      ))}
    </View>
  );
};
