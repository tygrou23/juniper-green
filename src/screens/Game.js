//import rract, react-native, and react-redux
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";

//import all components
import Game from "../components/Game";
import MyJuniperText from "../components/MyJuniperText";
import Mystyles from "../components/MyJuniperTextStyles";

//import start/end action for game
import {endGame, initGame} from "../actions/actions-types";

//other import
import AllChoices from "../components/AllChoices";
import Color from "../../AllColor";

//const GameScreen
const GameScreen = ({ navigation }) =>{

    const dispatch = useDispatch();
    const {IAturn,IAChoices,userChoices, gameOver, dateStartGame} = useSelector(state => state.juniper);


    //redirect into scorepage when endGame
    useEffect(()=>{
        if(gameOver){
            dispatch(endGame({
                won: IAturn,
                IAChoices: IAChoices,
                userChoices: userChoices,
                dateStartGame : dateStartGame,
                endGameDate : Date.now()}));
            //define time before we nativate to score screen
            setTimeout(function () {
                dispatch(initGame());
                navigation.push('Score')
            }, 3000);

        }
    },[gameOver]);

    return(
        <MyJuniperText>
            <View style={Mystyles.MenuTop}>
                <TouchableOpacity
                    style={Mystyles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Mystyles.button}
                    onPress={() => navigation.navigate('Rules')}
                >
                    <Text>Règles du jeu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Mystyles.button, {backgroundColor: Color.danger}]}
                    onPress={() => dispatch(initGame())}
                >
                    <Text style={{color: Color.white}}>Reset</Text>
                </TouchableOpacity>
            </View>
            <Game/>
            <AllChoices userChoices={userChoices} IAChoices={IAChoices}/>
        </MyJuniperText>
    )};

export default GameScreen;