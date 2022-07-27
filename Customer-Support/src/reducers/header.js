import { SET_CURRENT_PAGE } from '../actions/types';

const initialState = {

};

function headerReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        default:
            return state;
    }
}

export default headerReducer;