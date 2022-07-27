export const setLocalstore = (keyName, data) => {
    if (keyName && data) {
        window.localStorage.setItem(keyName, JSON.stringify(data));
    } else {
        return false;
    }
};

export const getLocalstore = (keyName) => {
    if (keyName) {
        return JSON.parse(window.localStorage.getItem(keyName));
    } else {
        return false;
    }
};

export const removeLocalstore = (key) => {
    if (key) {
        return window.localStorage.removeItem(key);
    } else {
        return false;
    }
};

export const existLocalstore = (key) => {
    if (key) {
        if (key in localStorage) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
