import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    app: {
        width: Dimensions
            .get('window')
            .width,
        height: Dimensions
            .get('window')
            .height,
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container: {
        width: 360 >= Dimensions
            .get('window')
            .width
            ? 350
            : 360,
        height: 500,
        backgroundColor: '#4BCDED',
        marginTop: 0,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 5,
        elevation: 20
    },
    hole: {
        width: 12,
        height: 12,
        backgroundColor: '#143962',
        borderRadius: 100
    },
    holeShadow: {
        width: 14,
        height: 14,
        marginTop: -14,
        backgroundColor: '#73DCF3',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    holesContainer: {
        top: 30,
        left: 360 >= Dimensions
            .get('window')
            .width
            ? 27
            : 32
    },
    press: {
        width: 120,
        height: 120,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressShadow: {
        width: 122,
        left: 118,
        backgroundColor: '#194C80',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    pressIcon: {
        width: 55,
        height: 55,
        zIndex: 999
    }
});