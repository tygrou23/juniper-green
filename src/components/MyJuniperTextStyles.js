import {StyleSheet} from "react-native";
import Color from "../../AllColor";

const Mystyles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Color.light,
        alignItems: 'stretch'
    },

    paragr: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },

    title1: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        marginBottom: 50,
    },

    title2: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        marginBottom: 20,
    },
   
    button: {
        backgroundColor: Color.secondary,
        borderRadius: 3,
        padding: 10,
        alignItems: "center",
        margin: 20,
        maxHeight: 60
        
    },

    MenuTop: {
        alignItems: "center",
        justifyContent : 'space-around',
        flexDirection:"row",
      
    },

    InputText: {
        width : 80,
        marginLeft : 5,
        borderWidth : 1,
    },

    ColumnAllChoices : {
        flex: 1,
        alignSelf:'stretch',
        padding: 2
    },

    ArrayChoices : {
        flex:2,
        flexDirection:"row",
        margin:10,
        borderWidth : 1,
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'stretch',
    },
    
    alertMessageBox:{
        flex :1,
        justifyContent: 'center',
        flexDirection:'column',
        width: '100%',
        position: 'absolute',
        backgroundColor: Color.danger,
        height: 70,
    },
});

export default Mystyles;