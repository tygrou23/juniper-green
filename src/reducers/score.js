//import endgame from constants
import {END_GAME} from "../constants/action";

//import lodash
import _ from 'lodash';

const initialState = {
    scores : []
};

//clone the inisitialState itno the stateinit
const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    //switch action
    switch (action.type)
    {
        //en game
        case END_GAME:
            //set the score
            const scores = state.scores.concat(action.payload);
            return {...state, scores: scores};
            
        default:
            return state;
    }
}

