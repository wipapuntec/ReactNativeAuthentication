import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useIntl} from 'react-intl';
import Colors from '../../utils/Colors';
import BackButtonCenter from '../../components/BackButtonCenter';
import ChangePin from '../../screens/setting/ChangePin';
import Setting from '../../screens/setting/Setting';
import ChangePasswordSetting from '../../screens/setting/ChangePasswordSetting';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const SettingStack = () => {
  const intl = useIntl();
  const language = useSelector(state => state.auth.language);

  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          backgroundColor: Colors.darkBlue,
          shadowColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          textAlign: 'center',
          color: Colors.white,
          fontSize: 20,
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={Setting}
        options={{
          headerLeft: false,
          title: intl.formatMessage({id: 'menu.setting'}),
        }}
      />
      <Stack.Screen
        name="ChangePinScreen"
        component={ChangePin}
        options={({route, navigation}) => ({
          header: () => (
            <BackButtonCenter
              onPress={() => navigation.goBack(null)}
              title={route.params.mode}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ChangePasswordSettingScreen"
        component={ChangePasswordSetting}
        options={({navigation}) => ({
          header: () => (
            <BackButtonCenter
              onPress={() => navigation.goBack(null)}
              title={intl.formatMessage({id: 'setting.changepw'})}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
