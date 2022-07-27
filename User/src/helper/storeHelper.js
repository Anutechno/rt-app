export const setStore = (key, value) => {
    if (key && value) {
        return window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        return false;
    }
};
export const getStore = (key) => {
    if (key) {
        return JSON.parse(window.localStorage.getItem(key));
    } else {
        return false;
    }
};
