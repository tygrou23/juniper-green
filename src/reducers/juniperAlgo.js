//import all constants needed
import { SET_USER_CHOICE, SUBMIT_USER_CHOICE, SUBMIT_IA_CHOICE, INIT_GAME, ERROR
    } from "../constants/action";

//import lodash for duplacate informations from a tab
import _ from 'lodash';

//import calculatepossibility from CurrentValue and IAStrats
import {CalculValuesPossibility, IAStrats} from "../utils/utils";

const initialState = {

    //define the nb max of value
    valueMax : 100,

    //IA
    IAChoice : '',
    IAChoices : [],
    IAturn : false,

    //user
    userChoice: '',
    userChoices : [],

    //other 
    ValuesPossibility : [],
    errorDisplay : false,
    errorMessage : '',
    gameOver: false,
    dateStartGame : null,
    winner: '',
};
const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {
    //user
    let userChoices;

    // IA
    let IAChoice;
    let IAChoices;

    //ValuesPossibility + ValuesPlayed
    let ValuesPossibility;
    let ValuesPlayed;

    //define gameOver
    let gameOver;

    //switch action
    switch (action.type)
    {
        case SET_USER_CHOICE:
            //set the user choice
            return {...state, userChoice: action.payload};
        case ERROR:
            //define the errormessage and display
            return{...state, errorMessage: '', errorDisplay: false};
        case INIT_GAME: 
            //INIT the game and define random valueinit 
            const valueInit = Math.floor(Math.random() * state.valueMax)+1;
            //value possibility call the calcul for define all the valuespossibility
            ValuesPossibility = CalculValuesPossibility([valueInit], valueInit, state.valueMax);

            return {...state,

                IAturn: false,
                IAChoices : [valueInit],
                IAChoice: valueInit,

                userChoices : [],
                userChoice: '',

                ValuesPossibility: ValuesPossibility,
                gameOver: false,
                winner: '',
                dateStartGame: Date.now(),
            };
        
        case SUBMIT_USER_CHOICE:
            
            //check if userchoice is between >0 && <  valuemax (100)
            if(!(state.userChoice>0 && state.userChoice <=state.valueMax))
            {
                return {...state,
                    errorMessage: `Attention ! Le nombre doit obligatoirement être compris entre 1 et ${state.valueMax}`,
                    errorDisplay: true
                };
            }
            //check if the userchoice doesnt already got choose
            if(state.userChoices.includes(parseInt(state.userChoice))
                || state.IAChoices.includes(parseInt(state.userChoice))
                )
            {
                return {...state,
                    errorMessage: 'Attention, le nombre choit à déja été joué !',
                    errorDisplay: true
                };
            }
            // check ValuesPossibility include from userchoihce
            if(!state.ValuesPossibility.includes(parseInt(state.userChoice))){
                return {...state,
                    errorMessage: `Votre nombre doit être soit un multiple ou un divisible de ${state.IAChoice}`,
                    errorDisplay: true
                };
            }
        
            //insert userChoice value into tab userChoices
            
            userChoices=[...state.userChoices, parseInt(state.userChoice)];

            //set the valuesplayed
            ValuesPlayed=userChoices.concat(state.IAChoices);
            //set the valuespossibility
            ValuesPossibility=CalculValuesPossibility(ValuesPlayed,state.userChoice, state.valueMax);
          
            //when no ValuesPossibility => gameOver
            gameOver=ValuesPossibility.length === 0;
            
            //if no valuespossibility => win / else => lost
            ValuesPossibility.length === 0 ? gameOver=true : gameOver=false;

            return {...state, userChoices: userChoices, IAturn: true, gameOver: gameOver,ValuesPossibility: ValuesPossibility};

        case SUBMIT_IA_CHOICE:
            if (state.gameOver)
                return state;

            //set IA choice
            IAChoice = IAStrats(state.ValuesPossibility, state.valueMax, state.userChoices.concat(state.IAChoice));
            IAChoices = state.IAChoices.concat(IAChoice);

            //set and update valuesplayed and valuespossibility
            ValuesPlayed = IAChoices.concat(state.userChoices);
            ValuesPossibility = CalculValuesPossibility(ValuesPlayed,IAChoice, state.valueMax);

            //if no valuespossibility left => IA win 
            gameOver = ValuesPossibility.length === 0;

            return {...state, IAChoice:IAChoice, IAChoices: IAChoices, userChoice: '',
            ValuesPossibility: ValuesPossibility, IAturn: false, gameOver: gameOver};

        default:
            return state;
    }
}

