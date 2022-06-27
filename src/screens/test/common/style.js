
import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
    inputContainer: {

        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'space-between',
        margin: 12,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        flex: 1,
        padding: 10,
        fontSize: 20,
    },
    inputButton: {
        margin: 8,
    },
    loadingView: {
        height: Dimensions.get('window').height,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    loadingText: {
        // backgroundColor: 'red',
        fontSize: 20,
        marginBottom: Dimensions.get('window').height / 6,
    },
    title: {
        width: (Dimensions.get('window').width / 2),
        fontSize: 20,
    },
    comments:{
        flex: 1,
        flexGrow: 0,
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 12,
        minHeight: (Dimensions.get('window').height  / 3) * 2,
    },
    button: {
        padding: 12,
        borderRadius: 10,
        marginVertical: 2,
        marginHorizontal: 12,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: 'white',
        opacity: 0.95
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 24,
        marginLeft: 8 / 283 * (Dimensions.get('window').width - 46 * 2),
        color: '#151515',
    }
})