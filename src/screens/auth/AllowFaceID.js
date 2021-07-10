//@flow
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {setAllowFaceAndTouchId} from '../../redux/user/action';
import {TextMainBlue, TextWhite} from '../../components/Text';
import Colors from '../../utils/Colors';
import ToggleSwitch from 'toggle-switch-react-native';
import NormalCard from '../../components/NormalCard';
import {Button} from '../../components/Button';

const AllowFaceID: () => React$Node = () => {
  const dispatch = useDispatch();
  const [isEnable, setEnable] = useState(false);
  const toggleSwitch = () => setEnable(value => !value);

  const goToHomePage = () => {
    dispatch(setAllowFaceAndTouchId(isEnable, false));
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
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingHorizontal: '3%',
              justifyContent: 'space-between',
              paddingVertical: '5%',
            }}>
            <NormalCard
              source={require('../../icons/FaceID.png')}
              title={
                <TextMainBlue>
                  <FormattedMessage id="register.allowFaceId" />
                </TextMainBlue>
              }>
              <ToggleSwitch
                isOn={isEnable}
                onColor={Colors.mainBlue}
                offColor={Colors.mainGray}
                labelStyle={{color: 'black', fontWeight: '400'}}
                size="large"
                onToggle={toggleSwitch}
              />
            </NormalCard>

            <Button onPress={() => goToHomePage()}>
              <TextWhite>
                <FormattedMessage id="register.next" />
              </TextWhite>
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AllowFaceID;
