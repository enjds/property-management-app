/**
 * Reference for shadow
 * https://github.com/facebook/react-native/issues/10049#issuecomment-366426897
 */

// Library imports
import { StyleSheet } from 'react-native';

// Local imports
import { primary, secondary } from '../../constants/colors';

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        marginRight: 15,
        marginLeft: 15,
        maxHeight: 85,
        backgroundColor: 'white',
        borderRadius: 70,
        shadowOffset: { height: 10 },
        shadowColor: primary,
        shadowOpacity: 0.1
    },
    iconButton: {
        width: 30,
        height: 30,
        shadowColor: 'white',
    },
    highlighButton: {
        width: 65,
        height: 65,
        backgroundColor: secondary,
        borderRadius: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: secondary,
        shadowOffset: { height: 7, width: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 2,
    },
    highlighButtonIcon: {
        width: 30,
        height: 30
    }
});