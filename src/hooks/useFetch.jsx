import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


const useFetch = (url,time) => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            setLoading("loading...");
            setData(null);
            setError(null);

            fetchDataFromApi(url)
                .then((res) => {
                    setLoading(false);
                    setData(res);
                })
                .catch((err) => {
                    setLoading(false);
                    setError("Something went wrong!");
                });
        };

        const delay = setTimeout(() => {
            fetchData();
        }, time); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(delay); // Cleanup timeout if the component unmounts or the URL changes
    }, [url]);

    return { data, loading, error };
};

export default useFetch;