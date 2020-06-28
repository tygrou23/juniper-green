import React from 'react';
import styles from "./JuniperTextStyles";
import {SafeAreaView} from "react-native-safe-area-context";
import AlertMessage from "./AlertMessage";


const JuniperText = ({children}) => {

    return(
        <SafeAreaView style={styles.container}>
        {children}
            <AlertMessage/>

        </SafeAreaView>
    )


};

export default JuniperText