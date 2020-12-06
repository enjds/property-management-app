import { Dimensions, StyleSheet } from 'react-native';
import { primary } from '../constants/colors';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
        fontFamily: 'Questrial-Regular',
        color: primary,
        margin: 15
    },
    scrollView: {
        margin: 15,
    },
    tabNavigator: {
        flex: 1
    }
});

export default styles;