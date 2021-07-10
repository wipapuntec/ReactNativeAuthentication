//@flow
import React from 'react';
import {TextInputRequired} from '../TextInput';
import {TextRed} from '../Text';
import {View} from 'react-native';
import {ViewMain} from '../Layout';

type BorderRequiredTypes = {
  placeholder?: string,
  value?: string | number,
  onChangeText?: any,
  error?: string | null,
  secureTextEntry?: boolean,
  refPassword?: any,
};

const BorderRequired = ({
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry,
  refPassword,
}: BorderRequiredTypes) => {
  return (
    <View>
      <ViewMain>
        <TextInputRequired
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          ref={refPassword}
        />
      </ViewMain>
      {error && <TextRed>{error}</TextRed>}
    </View>
  );
};

export default BorderRequired;
