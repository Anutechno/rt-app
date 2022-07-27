import { SET_CURRENT_PAGE } from './types';

export const setCurrentMessage = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        payload: currentPage
    });
}