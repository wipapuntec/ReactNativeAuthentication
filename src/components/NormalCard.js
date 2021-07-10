//@flow
import React from 'react';
import {View, Image} from 'react-native';
import Colors from '../utils/Colors';
import {SimpleCard} from './Layout';

type PropsNormalCardTypes = {
  source: any,
  title: any,
  children: any,
};

const NormalCard = ({source, title, children}: PropsNormalCardTypes) => {
  return (
    <SimpleCard>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
        }}>
        <Image
          source={source}
          style={{width: 50, height: 50, alignSelf: 'center'}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          paddingLeft: '7%',
        }}>
        {title}
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          paddingRight: '7%',
        }}>
        {children}
      </View>
    </SimpleCard>
  );
};

export default NormalCard;
