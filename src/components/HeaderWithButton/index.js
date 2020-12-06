import React from 'react';
import { Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../../constants/assets';
import styles from './style';

const HeaderWithButton = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <Text style={styles.title}>Property List</Text>
        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 50, padding: 10, borderColor: '#EEF1F5', marginLeft: 10}}>
           <Image source={icons.search}></Image>
        </TouchableOpacity>
      </View>
      
    );
};

export default HeaderWithButton;