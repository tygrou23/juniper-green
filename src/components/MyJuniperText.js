//import react and react native safe area context
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";

// other import from scripts
import Mystyles from "./MyJuniperTextStyles";
import Alertmessage from "./Alertmessage";

const MyJuniperText = ({children}) => {

    return(
        <SafeAreaView style={Mystyles.container}>
            {children}
            <Alertmessage/>
        </SafeAreaView>
    )};

export default MyJuniperText;