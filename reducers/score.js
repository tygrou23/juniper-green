import {END_GAME} from "../constants/action";

import _ from 'lodash';

const initialState = {
    scores : []
};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    switch (action.type)
    {
        case END_GAME:
            const scores = state.scores.concat(action.payload);
            return {...state, scores: scores};
        default:
            return state;
    }

}

