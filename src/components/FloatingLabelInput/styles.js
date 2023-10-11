import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6,
        marginVertical: 15,
        marginHorizontal: 25,
    },
    containerFocused: {
        borderColor: 'blue',
        borderWidth: 1,
    },
    label: {
        color: '#fff',
        position: 'absolute',
        height: '100%',
        textAlignVertical: 'center',
        left: 10,
        backgroundColor: '#000',
    },
    input: {
        fontSize: 17,
        paddingVertical: 15,
        color: '#fff',
        paddingHorizontal: 15,
    },
})