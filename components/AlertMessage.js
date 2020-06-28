import React from 'react';
import styles from "./JuniperTextStyles";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import Colors from "../../Colors";


const AlertMessage = () => {

    const {displayError, errorMessage} = useSelector(state => state.juniper);

    if (displayError)
        return(
                <View style={styles.alertBox}>
                    <Text style={{flex: 1, color:Colors.white,fontWeight: 'bold', alignSelf:'center'}}>{errorMessage}</Text>
                </View>
        );
    else
        return (<></>)
};

export default AlertMessage