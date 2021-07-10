//@flow
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {FormattedMessage, useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';
import {changePasswordRequest} from '../../redux/auth/action';
import {TextWhite, TextRed} from '../../components/Text';
import * as Yup from 'yup';
import {ContentSimple} from '../../components/Layout';
import BorderRequired from '../../components/textInput/BorderRequired';
import {Button} from '../../components/Button';
import ShowPassword from '../../components/ShowPassword';

const checkPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
const schema = Yup.object({
  originPassword: Yup.string().required('originPasswordError'),
  password: Yup.string()
    .required('passwordError')
    .matches(checkPassword, 'passwordformatError'),
  confirmPassword: Yup.string()
    .required('confirmPasswordError')
    .matches(checkPassword, 'confirmformatError')
    .oneOf([Yup.ref('password'), null], 'confirmPasswordMatchError'),
});

const ChangePasswordTest: () => React$Node = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const [originPassword, setOriginPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validateError, setValidateError] = useState({});

  const refPassword = useRef();
  const refConfirmPassword = useRef();

  const [passwordOriginVisble, setPasswordOriginVisible] = useState(false);
  const [passwordOldVisible, setPasswordOldVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const passwordForm = {
    originPassword: originPassword,
    originPasswordError: false,
    originformatError: false,
    password: password,
    passwordError: false,
    passwordformatError: false,
    confirmPassword: confirmPassword,
    confirmPasswordError: false,
    confirmformatError: false,
    confirmPasswordMatchError: false,
  };
  const goToPinPage = () => {
    schema
      .validate(passwordForm, {abortEarly: false})
      .then(() => {
        // clear the errors
        setValidateError({});
        dispatch(changePasswordRequest(originPassword, confirmPassword, true));
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
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
          keyboardShouldPersistTaps="handled">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ContentSimple style={{flex: 1, marginTop: 15}}>
              <View style={{flexDirection: 'row'}}>
                <BorderRequired
                  placeholder={intl.formatMessage({
                    id: 'changepw.oldpassword',
                  })}
                  refPassword={ref => (Platform.OS === 'ios' ? null : ref)}
                  value={originPassword}
                  onChangeText={text => setOriginPassword(text)}
                  secureTextEntry={!passwordOriginVisble}
                />
                <ShowPassword
                  setPasswordVisible={setPasswordOriginVisible}
                  passwordVisible={passwordOriginVisble}
                />
              </View>
              <View style={{paddingBottom: 10}}>
                {validateError['originPasswordError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.password" />
                  </TextRed>
                ) : validateError['originformatError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.format" />
                  </TextRed>
                ) : null}
              </View>
              <View style={{flexDirection: 'row'}}>
                <BorderRequired
                  placeholder={intl.formatMessage({
                    id: 'changepw.newpassword',
                  })}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry={!passwordOldVisible}
                  refPassword={refPassword}
                />
                <ShowPassword
                  passwordVisible={passwordOldVisible}
                  setPasswordVisible={setPasswordOldVisible}
                />
              </View>
              <View style={{paddingBottom: 10}}>
                {validateError['passwordError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.password" />
                  </TextRed>
                ) : validateError['passwordformatError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.format" />
                  </TextRed>
                ) : null}
              </View>

              <View style={{flexDirection: 'row'}}>
                <BorderRequired
                  placeholder={intl.formatMessage({
                    id: 'changepw.comfirmpassword',
                  })}
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                  secureTextEntry={!passwordConfirmVisible}
                  refPassword={refConfirmPassword}
                />
                <ShowPassword
                  passwordVisible={passwordConfirmVisible}
                  setPasswordVisible={setPasswordConfirmVisible}
                />
              </View>
              <View style={{paddingBottom: 10}}>
                {validateError['confirmPasswordError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.confirmPassword" />
                  </TextRed>
                ) : validateError['confirmformatError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.format" />
                  </TextRed>
                ) : validateError['confirmPasswordMatchError'] ? (
                  <TextRed>
                    <FormattedMessage id="register.wrong.confirmPasswordMatchError" />
                  </TextRed>
                ) : null}
              </View>

              <View style={{justifyContent: 'center', marginTop: 20}}>
                <Button onPress={goToPinPage}>
                  <TextWhite>
                    <FormattedMessage id="register.confirm" />
                  </TextWhite>
                </Button>
              </View>
            </ContentSimple>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePasswordTest;
