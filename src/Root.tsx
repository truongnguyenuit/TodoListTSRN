import { Text, View } from 'react-native';
import React from 'react';
import { store } from './stores';
import { Provider } from 'react-redux';
import AppNavigator from './core/AppNavigation';
const Root = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default Root;
