import React, {useEffect} from 'react';
import styles from "./JuniperTextStyles";
import {useDispatch, useSelector, } from "react-redux";
import {Text, TextInput, TouchableOpacity, View, ActivityIndicator} from "react-native";
import {setUserChoice, submitUserChoice, hideMessage, initGame, IATurn} from "../actions/actions-types";
import Colors from "../../Colors";

const Game = () => {
    const dispatch = useDispatch();
    const {computerTurn,playerChoice,playerChoices,computerChoice,computerChoices,displayError, gameOver} = useSelector(state => state.juniper);
    //Démarrage du jeu
    useEffect(()=>{dispatch(initGame())},[]);

    //Détection de l'affichage du message d'erreur
    useEffect(()=>{
        if(displayError)
            dispatch(hideMessage());
    },[displayError]);

    //Lancement du tour de jeu du computer
    useEffect(()=>{
        if(computerTurn && !gameOver)
            dispatch(IATurn());
    },[computerTurn]);



    return(
        <View>
            {gameOver && <Text style={styles.title2}>Plus de choix possible</Text>}
            {!gameOver && computerTurn && <View style={{flexDirection:'row', justifyContent:'space-evenly'}}><Text style={styles.title2}>Computer réfléchit...</Text><ActivityIndicator color={Colors.primary} /></View>}
            {!gameOver && !computerTurn && <Text style={styles.title2}>C'est à vous !</Text>}

            <Text style={styles.title2}>
                {computerChoices.length === 1 && playerChoices.length === 0? `Début du jeu: ${computerChoice}` :
                    !computerTurn? `Computer : ${computerChoice}`: `Vous avez choisi ${playerChoice}` }
            </Text>
            <View style={[{flexDirection:"row"},{alignItems: "center"},{justifyContent: 'center',}]}>
                <Text>Votre choix:</Text>
                <TextInput
                    keyboardType = 'name-phone-pad'
                    value={computerTurn?'':playerChoice.toString()}
                    onChangeText={value => dispatch(setUserChoice(value))}
                    disabled = {computerTurn}
                    style = {styles.textInput}
                />
            </View>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: Colors.primary}]}
                disabled = {computerTurn}
                onPress={() => dispatch(submitUserChoice())}
            >
                <Text style={{color: Colors.white}}>Valider</Text>
            </TouchableOpacity>

        </View>
    )


};

export default Game