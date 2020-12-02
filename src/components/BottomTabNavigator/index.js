/**
 * Use stack navigator for now
 * TODO: Implement Own Tab Navigator
 * https://reactnavigation.org/docs/custom-navigators/#usenavigationbuilder
 */
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { icons } from '../../constants/assets';
import { styles } from './style';

const BottomTabNavigator = ({navigation}) => {
    return (
            <View style={styles.card}>
                <IconButton 
                    iconName={'properties'} 
                    style={styles.iconButton} 
                    navigation={{route: navigation, page: 'PropertyList'}}>
                </IconButton>
                <IconButton 
                    iconName={'payments'} 
                    style={styles.iconButton} 
                    navigation={{route: navigation, page: 'Payments'}}>
                </IconButton>
                <IconButton 
                    iconName={'plus'} 
                    style={{ button: styles.highlighButton, icon: styles.highlighButtonIcon }} 
                    navigation={{route: navigation, page: 'Client'}}></IconButton>
                <IconButton 
                    iconName={'expenses'} 
                    style={styles.iconButton} 
                    navigation={{route: navigation, page: 'Expenses'}}></IconButton>
                <IconButton 
                    iconName={'clients'} 
                    style={styles.iconButton} 
                    navigation={{route: navigation, page: 'Client'}}></IconButton>
            </View>
    );
};

const IconButton = (props) => {
    return (
        <TouchableOpacity 
            style={props.style.button} 
            onPress={() => props.navigation.route.navigate(props.navigation.page)}>
            <Image source={icons[props.iconName]} style={props.style.icon} />
        </TouchableOpacity>
    );
}

export default BottomTabNavigator;