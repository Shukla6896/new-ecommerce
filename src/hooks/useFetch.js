import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api" // ctrl + & + space = available method fetch; like - fetchDataFromApi

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    }
    return { data };
}
export default useFetch;