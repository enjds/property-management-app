import React from 'react';
import { Text, SafeAreaView, ScrollView,  } from 'react-native';

import { BottomTabNavigator } from '../../components';
import styles from '../style';

const Client = ({navigation}) => (
  <SafeAreaView style={styles.safeAreaView}>
  <ScrollView style={styles.scrollView}>
    <Text style={styles.title}>Clients</Text>

  </ScrollView>
  <BottomTabNavigator navigation={navigation}></BottomTabNavigator>
</SafeAreaView>
);

export default Client;