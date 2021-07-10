//@flow
import React from 'react';
import {Image, View, TouchableOpacity, Platform} from 'react-native';
import {TextWhite} from './Text';
import Colors from '../utils/Colors';

type PropsTypes = {onPress: Function, title: string}; //You should follow all the same rules as any when using Function

const BackButtonCenter = ({onPress, title}: PropsTypes) => {
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? 90 : 60,
        backgroundColor: Colors.darkBlue,
        padding: 10,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: Platform.OS === 'ios' ? 30 : 0,
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity onPress={onPress} style={{flex: 0.5, width: '100%'}}>
          <Image
            source={require('../icons/Arrow-left.png')}
            style={{width: 15, height: 10, flex: 1}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View>
          <TextWhite>{title}</TextWhite>
        </View>
      </View>
    </View>
  );
};
export default BackButtonCenter;
