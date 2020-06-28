import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import JuniperText from "../components/JuniperText";
import styles from "../components/JuniperTextStyles";
import Colors from "../../Colors";

const HomeScreen = ({ navigation }) =>{

    return(
    <JuniperText>
        <Text style={styles.title2}>
                Bienvenue, voici le jeu
            </Text>
            <Text style={styles.title1}>
                Juniper Green
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Rules')}
            >
                <Text>Règles du jeu</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: Colors.primary}]}
                onPress={() => navigation.navigate('Game')}
            >
                <Text style={{color: Colors.white}}>Commencer le jeu</Text>
            </TouchableOpacity>
        </JuniperText>
    )

};
export default HomeScreen