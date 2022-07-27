import axios from "axios";

const ajaxHelper = async (method, url, data) => {
    return await axios({
        method: method,
        url: `${process.env.REACT_APP_API_DOMAIN}${url}`,
        data: data,
    });
};

export default ajaxHelper;
