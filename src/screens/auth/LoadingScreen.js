// @flow
import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingView} from '../../components/Layout';
import {setUserInfo} from '../../redux/user/action';

const LoadingScreen: () => React$Node = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {accessToken, empId, isForceChangePassword, isForceChangePin} =
    useSelector(state => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (accessToken !== '' && empId !== '') {
        dispatch(setUserInfo(accessToken, empId));
        if (isForceChangePassword) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'ChangePasswordScreen'}],
            }),
          );
        } else if (isForceChangePin) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'CreateWithPinScreen'}],
            }),
          );
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'LoginWithPinScreen'}],
            }),
          );
        }
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          }),
        );
      }
    }, 350);
  }, []);

  return (
    <LoadingView>
      <Image
        source={require('../../images/logo.jpeg')}
        style={{
          width: '70%',
          height: '70%',
          resizeMode: 'contain',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </LoadingView>
  );
};

export default LoadingScreen;
