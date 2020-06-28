import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import MyJuniperText from "../components/MyJuniperText";
import styles from "../components/JuniperTextStyles";
import Game from "../components/Game";
import {endGame, initGame} from "../actions/actions-types";
import {useDispatch, useSelector} from "react-redux";
import Choices from "../components/Choices";
import Colors from "../../Colors";


const GameScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const { gameOver, iATurn, iAChoices, userTUrn, userChoices, startGameDate } = useSelector (state => state.juniper);

    useEffect( () => {
      //si fin de partie
      if (GameOver) {
        dispatch(endGame({
          winner : iATurn,
          iAChoices : iAChoices,
          userChoices : userChoices,
          userTUrn : userTUrn,
          startGameDate : startGameDate,
          endGameDate : Date.now()
        })), 
        setTimeout( function () {
          dispatch( initGame());
          navigation.push('SCORE')
        }, 2000 );
      }
    }, [gameOver]);

    //define GamePage

    return (
      <MyJuniperText>
        <View style = {styles.topMenu}>
          
          <TouchableOpacity style= {styles.button} onPress = {() => navigation.navigate('Home')} >
            <Text> Home </Text>
          </TouchableOpacity>

          <TouchableOpacity style= {styles.button} onPress = {() => navigation.navigate('Rules')} >
            <Text> Règles du jeu </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style= {[styles.button, {backgroundColor: Colors.danger }]} onPress = {() => dispatch(initGame())}>
            <Text style= { {color: Colors.white }}> Reset </Text>
          </TouchableOpacity>
        </View>

        <Game/>
        <Choices userChoices= {userChoices} iAChoices = { iAChoices} />

      </MyJuniperText>
    )
};

export default GameScreen;