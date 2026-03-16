import { useEffect, useState } from "react";

export function useFetch(url, options={method: 'GET'}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url, options)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [])
    return data
}