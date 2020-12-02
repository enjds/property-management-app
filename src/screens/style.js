import { StyleSheet } from 'react-native';
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
        fontWeight: '500',
    },
    scrollView: {
        margin: 15
    },
    button: {
        backgroundColor: 'red',
    }
});

export default styles;