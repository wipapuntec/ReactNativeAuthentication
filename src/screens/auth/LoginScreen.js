//@flow
import React, {useState} from 'react';
import {SafeAreaView, View, KeyboardAvoidingView, Platform} from 'react-native';
import {FormattedMessage, useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';
import {checkAccount} from '../../redux/auth/action';
import * as Yup from 'yup';
import {Button} from '../../components/Button';
import {TextRed, TextWhite} from '../../components/Text';
import {ContentSimple} from '../../components/Layout';
import BorderRequired from '../../components/textInput/BorderRequired';
import ShowPassword from '../../components/ShowPassword';

const schema = Yup.object({
  username: Yup.string().required('usernameError'),
  password: Yup.string().required('passwordError'),
});

const LoginScreen: () => React$Node = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validateError, setValidateError] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const loginForm = {
    username: username,
    usernameError: false,
    password: password,
    passwordError: false,
  };

  const goToChangePasswordScreen = () => {
    schema
      .validate(loginForm, {abortEarly: false})
      .then(() => {
        // clear the errors
        setValidateError({});
        dispatch(checkAccount(username, password));
      })
      .catch(err => {
        const errors = {};
        err.errors.forEach(e => {
          errors[e] = true;
        });
        // set the errors
        setValidateError(errors);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1, flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({ios: 80, android: 0})}>
        <ContentSimple>
          <View style={{paddingBottom: 10}}>
            <BorderRequired
              onChangeText={text => setUsername(text)}
              value={username}
              placeholder={intl.formatMessage({
                id: 'login.username',
              })}
              error={
                validateError['usernameError']
                  ? intl.formatMessage({
                      id: 'register.wrong.username',
                    })
                  : null
              }
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 10,
            }}>
            <BorderRequired
              onChangeText={text => setPassword(text)}
              secureTextEntry={!passwordVisible}
              refPassword={ref =>
                Platform.OS === 'ios'
                  ? null
                  : ref &&
                    ref.setNativeProps({
                      style: {fontFamily: 'Ekachon-Medium'},
                    })
              }
              value={password}
              placeholder={intl.formatMessage({
                id: 'login.password',
              })}
            />
            <ShowPassword
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
          </View>
          {validateError['passwordError'] ? (
            <TextRed>
              <FormattedMessage id="register.wrong.password" />
            </TextRed>
          ) : null}

          <View style={{marginTop: 20}}>
            <Button onPress={() => goToChangePasswordScreen()}>
              <TextWhite>
                <FormattedMessage id="login.login" />
              </TextWhite>
            </Button>
          </View>
        </ContentSimple>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
