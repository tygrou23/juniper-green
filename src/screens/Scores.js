//import react, react-native, and react-redux
import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import { useSelector} from "react-redux";

//other imports / components, scripts
import MyJuniperText from "../components/MyJuniperText";
import Mystyles from "../components/MyJuniperTextStyles";
import AllChoices from "../components/AllChoices";
import Color from "../../AllColor";

const ScoreScreen = ({ navigation }) => {

    //define scores and score 
    const {scores} = useSelector(state => state.score);
    const [score] = scores.slice(-1);

    return(
        <MyJuniperText>
            <View style={Mystyles.MenuTop}>
                <TouchableOpacity
                    style={Mystyles.button} onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Mystyles.button, {backgroundColor: Color.primary}]} onPress={() => navigation.navigate('Game')}>
                    <Text style={{color: Color.white}}>Rejouer !</Text>
                </TouchableOpacity>
            </View>

            <Text style={Mystyles.title1}>Jeu Juniper Green</Text>
            <Text style={Mystyles.title2}>Fin du jeu ! vous avez {score.won?'gagné' : 'perdu'} en jouant {score.userChoices.length + score.IAChoices.length} tours
            </Text>

            <Text style={Mystyles.title2}>{scores.filter(s=>s.won === true).length} {scores.filter(s=>s.won === true).length > 1 && 's'} Gagné{scores.filter(s=>s.won === true).length > 1 && 's'}  sur {scores.length}</Text>
            <AllChoices IAChoices={score.IAChoices} userChoices={score.userChoices}/>

        </MyJuniperText>
    )

};

export default ScoreScreen