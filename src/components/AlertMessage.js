//import react, reactnative, and redux
import React from 'react';
import {Text, View} from "react-native";
import {useSelector} from "react-redux";

//other import script
import Color from "../../AllColor";
import Mystyles from "./MyJuniperTextStyles";

const Alertmessage = () => {

    const {errorDisplay, errorMessage} = useSelector (state => state.juniper);

    //if there is an error we print a view containing an alertbox message
    if (errorDisplay)
        return(
                <View style={Mystyles.alertMessageBox}>
                    <Text style={{flex: 1, color:Color.white,fontWeight: 'bold', alignSelf:'center'}}>{errorMessage}</Text>
                </View>
        );
    //if there is no errordisplay we continue the game
    else
        return (<></>)
};

export default Alertmessage;