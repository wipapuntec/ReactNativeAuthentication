//@flow

import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

type ShowPasswordTypes = {
  passwordVisible: boolean,
  setPasswordVisible: any,
};

const ShowPassword = ({
  passwordVisible,
  setPasswordVisible,
}: ShowPasswordTypes) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => setPasswordVisible(!passwordVisible)}>
      {passwordVisible ? (
        <Image
          source={require('../icons/icon_feather_eye.png')}
          style={{
            position: 'absolute',
            right: 0,
            alignSelf: 'center',
            width: 50,
            height: 20,
          }}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={require('../icons/icon_feather_eye_off.png')}
          style={{
            position: 'absolute',
            right: 0,
            alignSelf: 'center',
            width: 55,
            height: 25,
          }}
          resizeMode="contain"
        />
      )}
    </TouchableWithoutFeedback>
  );
};

export default ShowPassword;
