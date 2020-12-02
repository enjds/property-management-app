import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';

import { BottomTabNavigator } from '../../components';
import styles from '../style';

const PropertyList = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Property List</Text>

    </ScrollView>
    <BottomTabNavigator navigation={navigation}></BottomTabNavigator>
  </SafeAreaView>
);

export default PropertyList;