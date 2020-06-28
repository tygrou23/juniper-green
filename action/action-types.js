import {
    SET_PLAYER_CHOICE,
    SUBMIT_CHOICE,
    INITIALIZE_GAME,
    RESET_ERROR,
    SUBMIT_COMPUTER_CHOICE,
    END_GAME
} from "../constants/action";

export const setPlayerChoice = (payload) =>{
    return{
        type: SET_PLAYER_CHOICE, payload
    }
};
export const submitChoice = () =>{
    return{
        type: SUBMIT_CHOICE
    }
};

export const resetError = () =>{
    return{
        type: RESET_ERROR
    }
};

export const initializeGame = () =>{
    return{
        type: INITIALIZE_GAME
    }
};


export const submitComputerChoice = () =>{
    return{
        type: SUBMIT_COMPUTER_CHOICE
    }
};

export const endGame = (payload) => {
    return{
        type: END_GAME, payload
    }
};

export const hideMessage = () =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(resetError());
        }, 2000);
    };
};

export const computerPlays = () =>{
    
    const thinkingTime = Math.floor(Math.random() * (5000 - 2000) ) + 2000;
    return dispatch => {
        setTimeout(() => {
            dispatch(submitComputerChoice());
        }, thinkingTime);
    };
};

