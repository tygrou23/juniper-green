import {StyleSheet} from "react-native";
import Colors from "../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.light,
        alignItems: 'stretch'
    },
    
    title1: {

        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        margin: 10,
    },
    title2: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
    },
    paragraph: {
        textAlign: 'left',
        fontSize: 14,
        margin: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: Colors.secondary,
        padding: 10,
        margin: 10,
        borderRadius: 4,
    },
    topMenu: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent : 'space-around',
    },
    textInput: {
        borderWidth : 1,
        width : 80,
        marginLeft : 5,
    },
    choicesArray : {
        flex:2,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'stretch',
        margin:10,
        borderWidth : 1,
    },
    choicesColumn : {
        flex: 1,
        alignSelf:'stretch',
        padding: 2
    },
    alertBox:{
        flex :1,
        flexDirection:'column',
        width: '100%',
        position: 'absolute',
        backgroundColor: Colors.danger,
        height: 70,
        justifyContent: 'center',

    },
    alertBoxText:{
        flex: 1,
        color:Colors.white,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',

    }
});

export default styles