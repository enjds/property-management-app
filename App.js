/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import Routes from './src/routes';
import { Text, View ,StatusBar, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Routes />
    </>
  );
};

export default App;
