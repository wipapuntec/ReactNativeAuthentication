//@flow
import React from 'react';
import {View} from 'react-native';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {th, en} from './src/lang/index';
import AppStack from './src/navigations/AppStack';
import configureStore from './src/redux/store';
import ModalAction from './src/components/ModalAction';
import {useSelector} from 'react-redux';

const {store, persistor} = configureStore();

const HotReloadIntlProvider: () => React$Node = () => {
  const language = useSelector(state => state.auth?.language);

  return (
    <IntlProvider
      locale={language ? language.toLowerCase() : 'th'}
      messages={!language || language === 'th' ? th : en}>
      <View style={{flex: 1}}>
        <AppStack />
        <ModalAction />
      </View>
    </IntlProvider>
  );
};
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HotReloadIntlProvider />
      </PersistGate>
    </Provider>
  );
};

export default App;
