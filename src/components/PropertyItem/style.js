// Library imports
import { StyleSheet } from 'react-native';
import { primary } from '../../constants/colors';
import { body } from '../../constants/fonts';

export const styles = StyleSheet.create({

    card: {
        padding: 15, 
        borderRadius: 25, 
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        margin: 5,
        elevation: 9,
        shadowColor: primary,
        shadowOpacity: 0.1,
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    thumbnail: {
        width: 125,
        height: 125,
        borderRadius: 25,
    },
    detailSection: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 40
    },
    title: {
        color: primary,
        fontSize: 30,
        fontWeight: '600'
    },
    description: {
        color: '#959BB0',
        marginBottom: 15
    },
    iconText: {
        flex: 1,
        flexDirection: 'row',
        color: '#888EA5',
        backgroundColor: 'white',
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    statusIcon: {
        width: 24,
        height: 24,
        borderRadius: 50,
        position: 'absolute',
        bottom: 15,
        left: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    isDue: {
        backgroundColor: '#FF5776'
    },
    isNotDue: {
        backgroundColor: '#38C877'
    },
    amenities: { flex: 1, flexDirection: 'row', maxHeight: 20, maxWidth: 180 },
});