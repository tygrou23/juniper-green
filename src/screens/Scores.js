import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import { useSelector} from "react-redux";

import JuniperText from "../components/JuniperText";
import styles from "../components/JuniperTextStyles";
import Choices from "../components/Choices";
import Colors from "../../Colors";

const ScoreScreen = ({ navigation }) => {
    const {scores} = useSelector(state => state.score);
    //On récupère le dernier enregistreemnt du score
    const [score] = scores.slice(-1);

    return(
        <JuniperText>
            <View style={styles.topMenu}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: Colors.primary}]}
                    onPress={() => navigation.navigate('Game')}
                >
                    <Text style={{color: Colors.white}}>Rejouer</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title1}>Game Juniper Green</Text>
            <Text style={styles.title2}>Le jeu est terminé, vous avez {score.won?'gagné' : 'perdu'} en {score.playerChoices.length + score.computerChoices.length} tours
            </Text>
            <Text style={styles.title2}>{scores.filter(s=>s.won === true).length} partie{scores.filter(s=>s.won === true).length > 1 && 's'} gagnée{scores.filter(s=>s.won === true).length > 1 && 's'} / {scores.length}</Text>
            <Choices computerChoices={score.computerChoices} playerChoices={score.playerChoices}/>
        </JuniperText>
    )

};

export default ScoreScreen