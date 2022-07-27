import ajaxHelper from "./ajaxHelper";

export const postAjaxCall = (data) => {
    return ajaxHelper("POST", "/signup", data);
};
