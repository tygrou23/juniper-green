import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import MyJuniperText from "../components/MyJuniperText";
import Mystyles from "../components/MyJuniperTextStyles";
import {useSelector} from "react-redux";


const RulesScreen = ({ navigation }) =>{
    const {maxValue} = useSelector(state => state.juniper);


    return(
        <MyJuniperText>

            <Text style={Mystyles.title1}>
                Règles du jeu Juniper Green
            </Text>

            <TouchableOpacity
                style={Mystyles.button} onPress={() => navigation.navigate('Home')}
            >
                <Text>Retour sur la page principale</Text>
            </TouchableOpacity>
            <Text style={Mystyles.paragr}>Le jeu possède trois règles :</Text>
            <Text style={Mystyles.paragr}>Le Joueur 1 choisit un nombre entre 1 et {maxValue}.{'\n'}

                À tour de rôle, chaque joueur doit choisir un nombre parmi
                les multiples ou les diviseurs du nombre choisi précédemment
                par son adversaire et inférieur à {maxValue}.
            </Text>
            <Text style={Mystyles.paragr}>Un nombre ne peut être joué qu'une seule fois. {'\n'} 
                Le perdant étant le joueur qui ne trouve plus de multiples
                ou de diviseurs communs au nombre précédemment choisi
            </Text>
        </MyJuniperText>
    )

};

export default RulesScreen