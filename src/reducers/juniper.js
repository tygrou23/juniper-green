import {
    SET_USER_CHOICE,
    SUBMIT_USER_CHOICE,
    SUBMIT_IA_CHOICE,
    INIT_GAME,
    ERROR
} from "../constants/action";

import _ from 'lodash';
import {calculatePossibleValues, computerStrategy} from "../utils/utils";

const initialState = {
    maxValue : 100,
    playerChoice: '',
    computerChoice : '',
    computerChoices : [],
    playerChoices : [],
    possibleValues : [],
    displayError : false,
    errorMessage : '',
    computerTurn : false,
    gameOver: false,
    winner: '',
    startGameDate : null,

};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    let computerChoice;
    let computerChoices;
    let playerChoices;
    let possibleValues;
    let playedValues;
    let gameOver;

    switch (action.type)
    {
        case SET_USER_CHOICE:
            return {...state, playerChoice: action.payload};
        case ERROR:
            return{...state, errorMessage: '',displayError: false};
        case INIT_GAME:
            const initialValue = Math.floor(Math.random() * state.maxValue)+1;
            possibleValues = calculatePossibleValues([initialValue],initialValue, state.maxValue);

            return {...state,
                computerTurn: false,
                computerChoices : [initialValue],
                playerChoices : [],
                computerChoice: initialValue,
                possibleValues: possibleValues,
                startGameDate: Date.now(),
                playerChoice: '',
                gameOver: false,
                winner: '',
            };
        case SUBMIT_USER_CHOICE:
            //Vérifier valeur nombre entier >0 && <=100
            if(!(state.playerChoice>0 && state.playerChoice <=state.maxValue))
            {
                return {...state,
                    errorMessage: `Le nombre doit être compris entre 1 et ${state.maxValue}`,
                    displayError: true
                };
            }
            //Vérifier que le nombre n'ait pas déjà été saisi
            if(state.playerChoices.includes(parseInt(state.playerChoice))
                || state.computerChoices.includes(parseInt(state.playerChoice))
                )
            {
                return {...state,
                    errorMessage: 'Nombre déjà joué',
                    displayError: true
                };
            }
            //TODO vérifier valeur correcte (incluse dans possibleValues
            if(!state.possibleValues.includes(parseInt(state.playerChoice))){
                return {...state,
                    errorMessage: `Le nombre doit être un multiple ou un divisible de ${state.computerChoice}`,
                    displayError: true
                };
            }
            //TODO Ajouter la valeur au tableau playersChoice + chercher les nouvelles valeurs possibles
            playerChoices = [...state.playerChoices, parseInt(state.playerChoice)];
            playedValues = playerChoices.concat(state.computerChoices);
            possibleValues = calculatePossibleValues(playedValues,state.playerChoice, state.maxValue);
            //Si plus de valeurs possibles, le jeu est terminé
            gameOver = possibleValues.length === 0;
            //Si plus de valeurs possibles, partie gagnée
            possibleValues.length === 0 ? gameOver = true : gameOver = false;

            return {...state, playerChoices: playerChoices, computerTurn: true, gameOver: gameOver,
                        possibleValues: possibleValues};

        case SUBMIT_IA_CHOICE:
            if (state.gameOver)
                return state;
            computerChoice = computerStrategy(state.possibleValues, state.maxValue, state.playerChoices.concat(state.computerChoice));
            computerChoices = state.computerChoices.concat(computerChoice);
            playedValues = computerChoices.concat(state.playerChoices);
            possibleValues = calculatePossibleValues(playedValues,computerChoice, state.maxValue);

            //Si plus de valeurs possibles, partie gagnée
            gameOver = possibleValues.length === 0;
            return {...state, computerChoice:computerChoice, computerChoices: computerChoices, playerChoice: '',
                possibleValues: possibleValues, computerTurn: false, gameOver: gameOver};

        default:
            return state;
    }

}

