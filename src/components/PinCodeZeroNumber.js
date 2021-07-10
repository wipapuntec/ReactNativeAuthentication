//@flow
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {TouchablePinCodeNumber} from './Button';
import {TextMainBlue} from './Text';

const PinCodeZeroNumber = ({onPress, onDelete}: Function) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View style={{width: 60, height: 60, marginRight: 15}} />
      <TouchablePinCodeNumber onPress={onPress}>
        <TextMainBlue>0</TextMainBlue>
      </TouchablePinCodeNumber>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          height: 70,
          backgroundColor: 'transparent',
          borderRadius: 50,
        }}
        onPress={onDelete}>
        <Image
          source={require('../icons/delete-pin.png')}
          style={{width: '80%', height: '80%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PinCodeZeroNumber;
