//import from react, react-redux, and react-native
import React, {useEffect} from 'react';
import {useDispatch, useSelector, } from "react-redux";
import {Text, TextInput, TouchableOpacity, View, ActivityIndicator} from "react-native";

//other import from scripts
import {setUserChoice, submitUserChoice, IAPlays, messageStatus, initGame } from "../actions/actions-types";
import Mystyles from "./MyJuniperTextStyles";
import Color from "../../AllColor";

const Game = () => {

    const dispatch = useDispatch();
    const {userChoice, userChoices, IAturn, IAChoice, IAChoices, gameOver, errorDisplay} = useSelector(state => state.juniper);

    //init the game
    useEffect(()=>{dispatch(initGame())},[]);

    //if we got errorDisplay -> define
    useEffect(()=>{
        if(errorDisplay)
            dispatch(messageStatus());
    },
    [errorDisplay]);

    //start the IAturn
    useEffect(()=>{
        if(IAturn && ! gameOver)
            dispatch(IAPlays());
    },
    [IAturn]);

    return(
        <View>
            {gameOver && <Text style={Mystyles.title2}>Vous n'avez plus de choix possible</Text>}
            {!gameOver && IAturn && <View style={{flexDirection:'row', justifyContent:'space-evenly'}}><Text style={Mystyles.title2}>L'IA réfléchit ...</Text><ActivityIndicator color={Color.primary} /></View>}
            {!gameOver && !IAturn && <Text style={Mystyles.title2}>A toi de jouer !</Text>}

            <Text style={Mystyles.title2}>
                {IAChoices.length === 1 && userChoices.length === 0? `Premier chiffre: ${IAChoice}` :
                    !IAturn? `Computer : ${IAChoice}`: `Votre chiffre ${userChoice}` }
            </Text>

            <View style={[{flexDirection:"row"},{alignItems: "center"},{justifyContent: 'center',}]}>
                <Text>Votre choix:</Text>
                <TextInput keyboardType = 'name-phone-pad' value={IAturn?'':userChoice.toString()}
                    onChangeText={value => dispatch(setUserChoice(value))}
                    disabled = {IAturn} style = {Mystyles.InputText}/>
            </View>

            <TouchableOpacity
                style={[Mystyles.button, {backgroundColor: Color.green}]} disabled = {IAturn}
                onPress={() => dispatch(submitUserChoice())}>
            <Text style={{color: Color.white}}>Valider </Text>
            </TouchableOpacity>

        </View>
    )};

export default Game;