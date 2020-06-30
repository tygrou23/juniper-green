import { SET_USER_CHOICE, SUBMIT_USER_CHOICE, SUBMIT_IA_CHOICE, INIT_GAME, END_GAME, ERROR
    } from "../constants/action";

export const setUserChoice = (payload) =>{
    return{
        type: SET_USER_CHOICE, payload
    }
};
export const submitUserChoice = () =>{
    return{
        type: SUBMIT_USER_CHOICE
    }
};

export const submitIAChoice = () =>{
    return{
        type: SUBMIT_IA_CHOICE
    }
};

export const initGame = () =>{
    return{
        type: INIT_GAME
    }
};

export const endGame = (payload) => {
    return{
        type: END_GAME, payload
    }
};

export const error = () =>{
    return{
        type: ERROR
    }
};

//we define other const for the game

export const hideMessage = () =>{
    //define a tiemout to hidemessage
    return dispatch => {
        setTimeout(() => {
            dispatch(resetError());
        }, 2000);
    };
};

export const IATurn = () =>{
    // we define a time for IA thinking
    const thinkingTime = Math.floor(Math.random() * (4000 - 2000) ) + 2000;
    return dispatch => {
        setTimeout(() => {
            dispatch(submitIAChoice());
        }, thinkingTime);
    };
};

