import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/RootNavigation';
import LoginScreen from '../screens/auth/LoginScreen';
import Colors from '../utils/Colors';
import LoadingScreen from '../screens/auth/LoadingScreen';
import {useSelector} from 'react-redux';
import ChangePassword from '../screens/auth/ChangePassword';
import CreateWithPin from '../screens/auth/CreateWithPin';
import ConfirmWithPin from '../screens/auth/ConfirmWithPin';
import AllowFaceID from '../screens/auth/AllowFaceID';
import Consent from '../screens/auth/Consent';
import LoginWithPin from '../screens/auth/LoginWithPin';
import SettingStack from './setting/SettingStack';

const Stack = createStackNavigator();

const AppStack = () => {
  function getActiveRouteName(rootState) {
    if (!rootState) {
      return null;
    }
    const route = rootState.routes[rootState.index];
    // dive into nested navigators
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  }

  const language = useSelector(state => state.auth.language);
  
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() =>
        getActiveRouteName(navigationRef.current?.getRootState())
      }>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
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
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePassword}
          options={{
            headerLeft: false,
            title:
              language === 'th'
                ? 'ยินดีต้อนรับสู่ระบบ'
                : 'Welcome to Application',
          }}
        />
        <Stack.Screen
          name="CreateWithPinScreen"
          component={CreateWithPin}
          options={{
            headerLeft: false,
            title: language === 'th' ? 'สร้างรหัส PIN' : 'Create PIN',
          }}
        />
        <Stack.Screen
          name="ConfirmWithPinScreen"
          component={ConfirmWithPin}
          options={{
            headerLeft: false,
            title: language === 'th' ? 'ยืนยันรหัส PIN' : 'Confirm PIN',
          }}
        />
        <Stack.Screen
          name="AllowFaceIDScreen"
          component={AllowFaceID}
          options={{
            headerLeft: false,
            title:
              language === 'th'
                ? 'ตั้งค่าการยืนยันตัวตน'
                : 'Set up identity verification',
          }}
        />
        <Stack.Screen
          name="ConsentScreen"
          component={Consent}
          options={{
            headerLeft: false,
            title:
              language === 'th'
                ? 'ข้อกำหนดและเงื่อนไข'
                : 'Terms and conditions',
          }}
        />
        <Stack.Screen
          name="LoginWithPinScreen"
          component={LoginWithPin}
          options={{
            headerLeft: false,
            title: language === 'th' ? 'กรุณาใส่รหัส PIN' : 'Enter PIN Code',
          }}
        />
        <Stack.Screen
          name="SettingStack"
          component={SettingStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
