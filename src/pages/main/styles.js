import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 5,
    },
    buttonEliminar: {
        backgroundColor: 'red',
        borderRadius: 4,
        margin: 15,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonEditar: {
        backgroundColor: 'green',
        borderRadius: 4,
        margin: 15,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#7159c1',
        borderRadius: 4,
        margin: 15,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    containerBody: {
        flex: 1,
        padding: 24,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: '80%',
    },
    card: {
        backgroundColor: 'gray',
        // width: '80%'
        borderRadius:25,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    cardBody: {
        textAlignVertical:'center',
        alignItems:'center'
    },
    cardHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})