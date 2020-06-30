import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import JuniperText from "../components/JuniperText";
import styles from "../components/JuniperTextStyles";
import Game from "../components/Game";
import {endGame, initGame} from "../actions/actions-types";
import {useDispatch, useSelector} from "react-redux";
import Choices from "../components/Choices";
import Colors from "../../Colors";

const GameScreen = ({ navigation }) =>{
    const dispatch = useDispatch();
    const {gameOver, computerTurn,computerChoices,playerChoices, startGameDate} = useSelector(state => state.juniper);


    //Redirection vers la page score en fin de partie
    useEffect(()=>{
        if(gameOver){
            dispatch(endGame({
                won: computerTurn,
                computerChoices: computerChoices,
                playerChoices: playerChoices,
                startGameDate : startGameDate,
                endGameDate : Date.now()
            }));
            setTimeout(function () {
                dispatch(initGame());
                navigation.push('Score')
            }, 3000);

        }
    },[gameOver]);

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
                    style={styles.button}
                    onPress={() => navigation.navigate('Rules')}
                >
                    <Text>Règles du jeu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: Colors.danger}]}
                    onPress={() => dispatch(initGame())}
                >
                    <Text style={{color: Colors.white}}>Reset</Text>
                </TouchableOpacity>
            </View>
            <Game/>
            <Choices playerChoices={playerChoices} computerChoices={computerChoices}/>



        </JuniperText>
    )




};

export default GameScreen