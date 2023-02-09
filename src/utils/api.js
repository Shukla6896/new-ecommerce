import axios from "axios";

//BASE KEY =  process.fileName.Key inside the file.
const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

//BASE url =  process.fileName.baseURL.
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_SHUKLA_URL + url, params);
        return data;
    } catch (error) {
        // console.log(error);
        return error;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_SHUKLA_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
});