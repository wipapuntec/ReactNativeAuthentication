//@flow
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {TextMainBlue} from './Text';
import Colors from '../utils/Colors';
import {LineGray} from './Layout';

type SettingCardTypes = {
  firstIcon?: any,
  text?: string,
  onPress?: Function,
  type?: string,
  children?: any,
};

const SettingCard = ({
  firstIcon,
  text,
  onPress,
  type = 'next',
  children,
}: SettingCardTypes) => {
  return (
    <>
      {type === 'next' && (
        <>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              backgroundColor: Colors.white,
            }}
            onPress={onPress}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: '5%',
                marginVertical: '2%',
                height: 70,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={firstIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 9}}>
                <TextMainBlue>{text}</TextMainBlue>
              </View>
              <View style={{flex: 3, alignItems: 'flex-end'}}>
                <Image
                  source={require('../icons/Arrow-left-gray.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <LineGray style={{marginVertical: 0}} />
          </TouchableOpacity>
        </>
      )}
      {type === 'select' && (
        <>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              backgroundColor: Colors.white,
            }}
            onPress={onPress}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: '5%',
                marginVertical: '2%',
                height: 70,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={firstIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 9}}>
                <TextMainBlue>{text}</TextMainBlue>
              </View>
              <View style={{flex: 3, alignItems: 'flex-end'}}>{children}</View>
            </View>
            <LineGray style={{marginVertical: 0}} />
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default SettingCard;
