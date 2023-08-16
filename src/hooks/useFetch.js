import { useState, useEffect } from 'react';

function useFetch(){

    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response = await fetch("http://localhost:5173/src/mocks/data.json");
        const json = await response.json();
        setData(json);
    }

    useEffect(
        () => {
            
        setTimeout(getProducts, 1000);

        }, []
    )

    return data

}

export default useFetch