import { useEffect } from "react";
import { useState } from "react";

/**
 *
 * @param {Object | Array} defaultValue
 */
export function useLocalStorage(key, defaultValue) {

    let rawData = localStorage.getItem(key);
    let cookedData = defaultValue;
    if (rawData) {
        cookedData = JSON.parse(rawData);
    }
    const [data, setData] = useState(cookedData);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data]);

    return [
        data, setData
    ];

}
