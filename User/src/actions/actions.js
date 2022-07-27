export const setUser = (data) => {
    return {
        type: "SETUSER",
        payload: data,
    };
};

export const setHideSearchBar = (data) => {
    return {
        type: "SETHIDESEARCHBAR",
        payload: data,
    };
};

export const setShowNotif = (data) => {
    return {
        type: "SETSHOWNOTIF",
        payload: data,
    };
};

export const setPublicPage = (data) => {
    return {
        type: "SETPUBLICPAGE",
        payload: data,
    };
};

export const setDetailItem = (data) => {
    return {
        type: "SETDETAILITEM",
        payload: data,
    };
};
/**
 * sign up action
 * action name (AUTH)
 */

export const auth = (data) => {
    return {
        type: "AUTH",
        payload: data,
    };
};
