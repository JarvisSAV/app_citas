import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        backgroundColor: '#000',
    },
    button:{
        backgroundColor: '#7159c1',
        borderRadius: 4,
        margin: 15,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 17,
        paddingVertical: 15,
        color: '#fff',
        paddingHorizontal: 15,
    },
    containerButtons:{
        flexDirection:'row',
        display:"flex",
        justifyContent:"space-evenly"
    }, 
    buttonText:{
        width:100,
        textAlign:"center",
        fontSize:16
    },
    errorText: {
        color: 'red',
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 20,
    },
})