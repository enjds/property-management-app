import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { BottomTabNavigator , PropertyItem, HeaderWithButton} from '../../components';
import styles from '../style';

import { MOCK_DATA } from '../../constants/mocks';

const PropertyList = ({ navigation }) => {
  const [ activeIndex, setActiveIndex ] = useState(null);
  const _renderItem = ({ item }) => (
    <PropertyItem 
      activeIndex={activeIndex} 
      property={item} 
      onPressIn={() => setActiveIndex(item.id)}>
    </PropertyItem>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          ListHeaderComponent={<HeaderWithButton />}
          style={styles.scrollView}
          data={MOCK_DATA}
          renderItem={ _renderItem }
          keyExtractor={item => item.id}
        />
        <BottomTabNavigator style={ [ { height: 100}, styles.tabNavigator] } navigation={navigation}></BottomTabNavigator>
    </SafeAreaView>
  );
};

export default PropertyList;