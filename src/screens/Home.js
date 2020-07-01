import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import MyJuniperText from "../components/MyJuniperText";
import Mystyles from "../components/MyJuniperTextStyles";
import Color from "../../AllColor";

const HomeScreen = ({ navigation }) =>{

    return(
    <MyJuniperText>

            <Text style= {Mystyles.title1}>
            Bienvenue voici le Jeu Juniper Green
            </Text>
            <TouchableOpacity
                style={Mystyles.button}
                onPress={() => navigation.navigate('Rules')}>
                <Text>Règles du jeu</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[Mystyles.button, {backgroundColor: Color.green}]}
                onPress={() => navigation.navigate('Game')}>
                <Text style={{color: Color.white}}>Commencer une partie</Text>
            </TouchableOpacity>
        </MyJuniperText>
    )

};
export default HomeScreen