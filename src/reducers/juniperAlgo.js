//import all constants needed
import { SET_USER_CHOICE, SUBMIT_USER_CHOICE, SUBMIT_IA_CHOICE, INIT_GAME, ERROR
    } from "../constants/action";

//import lodash for duplacate informations from a tab
import _ from 'lodash';

//import calculatepossibility from CurrentValue and IAStrats
import {CalculValuesPossibility, IAStrats} from "../utils/utils";

const initialState = {

    maxValue : 100,

    IAChoice : '',
    IAChoices : [],
    IAturn : false,

    userChoice: '',
    userChoices : [],

    ValuesPossibility : [],
    errorDisplay : false,
    errorMessage : '',
    gameOver: false,
    winner: '',
    startGameDate : null,
};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    //define let for user
    let userChoices;

    //define let for IA
    let IAChoice;
    let IAChoices;

    //define ValuesPossibility
    let ValuesPossibility;
    //define ValuesPlayed
    let playedValues;

    //define gameOver
    let gameOver;

    switch (action.type)
    {
        case SET_USER_CHOICE:
            return {...state, userChoice: action.payload};
        case ERROR:
            return{...state, errorMessage: '',errorDisplay: false};
        case INIT_GAME:
            const initialValue = Math.floor(Math.random() * state.maxValue)+1;
            ValuesPossibility = CalculValuesPossibility([initialValue],initialValue, state.maxValue);

            return {...state,
                IAturn: false,
                IAChoices : [initialValue],
                userChoices : [],
                IAChoice: initialValue,
                ValuesPossibility: ValuesPossibility,
                startGameDate: Date.now(),
                userChoice: '',
                gameOver: false,
                winner: '',
            };
        case SUBMIT_USER_CHOICE:
            //Vérifier valeur nombre entier >0 && <=100
            if(!(state.userChoice>0 && state.userChoice <=state.maxValue))
            {
                return {...state,
                    errorMessage: `Le nombre doit être compris entre 1 et ${state.maxValue}`,
                    errorDisplay: true
                };
            }
            //Vérifier que le nombre n'ait pas déjà été saisi
            if(state.userChoices.includes(parseInt(state.userChoice))
                || state.IAChoices.includes(parseInt(state.userChoice))
                )
            {
                return {...state,
                    errorMessage: 'Nombre déjà joué',
                    errorDisplay: true
                };
            }
            //TODO vérifier valeur correcte (incluse dans ValuesPossibility
            if(!state.ValuesPossibility.includes(parseInt(state.userChoice))){
                return {...state,
                    errorMessage: `Le nombre doit être un multiple ou un divisible de ${state.IAChoice}`,
                    errorDisplay: true
                };
            }
            //TODO Ajouter la valeur au tableau playersChoice + chercher les nouvelles valeurs possibles
            userChoices = [...state.userChoices, parseInt(state.userChoice)];
            playedValues = userChoices.concat(state.IAChoices);
            ValuesPossibility = CalculValuesPossibility(playedValues,state.userChoice, state.maxValue);
            //Si plus de valeurs possibles, le jeu est terminé
            gameOver = ValuesPossibility.length === 0;
            //Si plus de valeurs possibles, partie gagnée
            ValuesPossibility.length === 0 ? gameOver = true : gameOver = false;

            return {...state, userChoices: userChoices, IAturn: true, gameOver: gameOver,
                ValuesPossibility: ValuesPossibility};

        case SUBMIT_IA_CHOICE:
            if (state.gameOver)
                return state;
                IAChoice = IAStrats(state.ValuesPossibility, state.maxValue, state.userChoices.concat(state.IAChoice));
            IAChoices = state.IAChoices.concat(IAChoice);
            playedValues = IAChoices.concat(state.userChoices);
            ValuesPossibility = CalculValuesPossibility(playedValues,IAChoice, state.maxValue);

            //Si plus de valeurs possibles, partie gagnée
            gameOver = ValuesPossibility.length === 0;
            return {...state, IAChoice:IAChoice, IAChoices: IAChoices, userChoice: '',
            ValuesPossibility: ValuesPossibility, IAturn: false, gameOver: gameOver};

        default:
            return state;
    }
}

