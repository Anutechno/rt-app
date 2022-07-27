import {
    FLAG_MESSAGE,
    NEW_FOLDER,
    DELETE_MESSAGES,
    MOVE_TO
} from './types';

export const flagMessage = (id) => {
    return ({
        type: FLAG_MESSAGE,
        payload: {
            id: id
        }
    })
}

export const createNewFolder = (name) => {
    return ({
        type: NEW_FOLDER,
        payload: {
            name: name
        }
    });
}

export const deleteMsgs = (msgIds) => {
    return ({
        type: DELETE_MESSAGES,
        payload: {
            msgIds: msgIds
        }
    })
}

export const moveTo = (to, msgIds) => {
    // console.log(to, msgIds);
    return ({
        type: MOVE_TO,
        payload: {
            to: to,
            msgIds: msgIds
        }
    })
}